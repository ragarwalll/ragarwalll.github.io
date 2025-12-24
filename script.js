/**
 * Handles the favicon based on the visibility of the page.
 */
const faviconHandler = () => {
  const favicon = document.querySelector(
    'link[rel="icon"][type="image/x-icon"]'
  );
  if (!favicon) {
    console.warn("Favicon link element not found.");
    return;
  }
  // get current favicon path
  const currentFavicon = favicon.getAttribute("href");

  // Set the favicon path based on visibility
  // if the page is hidden, set a different favicon i.e. add a "hidden" suffix
  const faviconPath = document.hidden
    ? currentFavicon.replace(/(\.[a-z]{2,4})$/, "-inactive$1")
    : currentFavicon.replace(/-inactive(\.[a-z]{2,4})$/, "$1");

  favicon.setAttribute("href", faviconPath);
};

/**
 * Optimizes smooth scroll handling.
 * @param {Element} element - The element to scroll to.
 */
const smoothScrollTo = (element) => {
  if (!element) {
    console.warn("Attempted to scroll to a null element.");
    return;
  }

  // Use native smooth scroll with fallback
  if ("scrollBehavior" in document.documentElement.style) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // Fallback for browsers that don't support smooth scroll
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

/**
 * Handles changes to the URL hash to scroll to the target element.
 * @returns {void}
 */
const hashChangerHandler = () => {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  // Escape potential special characters in the hash for robust selection
  const escapedHash = CSS.escape(hash);
  const element = document.querySelector(`[href="${escapedHash}"]`);

  if (!element) {
    console.warn(`Element with href="${escapedHash}" not found.`);
    return;
  }

  smoothScrollTo(element);
};

/**
 * Updates the active section based on the current scroll position using debouncing.
 */
const updateActiveSection = (() => {
  // Cache selectors outside the function to avoid repeated lookups
  const activators = document.querySelectorAll(".c-heading-anchor");
  const headingLinks = document.querySelectorAll(".c-heading-anchor__link");

  let scrollTimeout;
  const debounceDelay = 100;

  const processScroll = () => {
    requestAnimationFrame(() => {
      if (window.scrollY <= 50 && window.location.hash) {
        headingLinks.forEach((link) =>
          link.classList.remove("c-heading-anchor__link--active")
        );
        history.replaceState(null, null, window.location.pathname);
        return;
      }

      let currentActivator = null;
      let maxVisibility = 0;

      for (let i = 0; i < activators.length; i++) {
        const activator = activators[i];
        const rect = activator.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const visibility =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentActivator = activator.querySelector(
              "a[class='c-heading-anchor__link']"
            );
          }
        }
      }

      if (currentActivator) {
        const currentHref = currentActivator.getAttribute("href");

        const currentHash = window.location.hash;
        if (currentHash !== currentHref) {
          history.replaceState(null, null, currentHref);

          headingLinks.forEach((link) => {
            link.classList.toggle(
              "c-heading-anchor__link--active",
              link.getAttribute("href") === currentHref
            );
          });
        }
      } else {
        headingLinks.forEach((link) =>
          link.classList.remove("c-heading-anchor__link--active")
        );
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname);
        }
      }
    });
  };

  return () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(processScroll, debounceDelay);
  };
})();

/**
 * Main function to handle all event listeners.
 */
const scrollManager = () => {
  window.addEventListener("hashchange", hashChangerHandler);

  // Handle initial hash on page load
  if (window.location.hash) {
    requestAnimationFrame(() => {
      const escapedHash = CSS.escape(window.location.hash);
      const targetElement = document.querySelector(`[href="${escapedHash}"]`);
      if (targetElement) {
        requestAnimationFrame(() => smoothScrollTo(targetElement));
      }
    });
  }

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });
};

/**
 * TLDR Generator functionality
 */
const tldrGenerator = (() => {
  let modal, openBtn, closeBtn, categoryButtons;

  // Prompt templates for each category - optimized for real-world use cases
  const prompts = {
    professional: `Visit ${window.location.origin} and analyze the website content. Also check https://github.com/ragarwalll if mentioned.

Create a professional TLDR summary that would be useful for:
- Recruiters scanning LinkedIn profiles
- Hiring managers reviewing candidates
- Potential collaborators or clients
- Networking events and introductions

REQUIREMENTS:
1. Extract key information:
   - Current role and company
   - Years of experience and career progression
   - Core technical skills (be specific: languages, frameworks, tools)
   - Notable projects with impact/metrics (downloads, users, etc.)
   - Problem-solving approach and work philosophy
   - Educational background

2. Format as a concise professional bio (2-3 short paragraphs):
   - First paragraph: Current role, experience level, and primary expertise
   - Second paragraph: Key achievements, projects, and technical strengths
   - Third paragraph (optional): Approach to work, values, or unique differentiators

3. Style guidelines:
   - Professional but approachable tone
   - Use specific technologies and metrics when available
   - Focus on outcomes and impact, not just responsibilities
   - Avoid buzzwords and generic statements
   - Be authentic to the website's tone
   - No emojis

4. Make it scannable and LinkedIn-ready - something that can be copied directly into a professional profile or email introduction.`,

    friendly: `Visit ${window.location.origin} and read through the website to understand Rahul's personality and interests.

Create a friendly, casual TLDR that would be useful for:
- Introducing him to new friends or social groups
- Social media bios (Twitter, Instagram, etc.)
- Casual networking or meetups
- When someone asks "tell me about yourself" in a non-professional setting

REQUIREMENTS:
1. Extract key information:
   - Personal background and story
   - Hobbies, interests, and passions
   - Personality traits and quirks
   - Creative pursuits and adventures
   - What makes him interesting as a person
   - Projects mentioned casually (not too technical)

2. Format as a friendly introduction (2-3 paragraphs):
   - First paragraph: Who he is and what he's passionate about
   - Second paragraph: Interests, hobbies, and personality highlights
   - Third paragraph: Fun facts or what makes him unique

3. Style guidelines:
   - Warm, conversational, and approachable
   - Light humor is welcome
   - Focus on personality over professional achievements
   - Use casual language but stay authentic
   - Can include emojis sparingly if it fits the tone
   - Make it relatable and human

4. Make it something a friend would say when introducing him - natural, engaging, and easy to remember.`,

    dating: `Visit ${window.location.origin} and analyze the website to understand Rahul's personality, interests, and what makes him interesting.

Create an engaging dating profile TLDR that would be useful for:
- Dating apps (Hinge, Bumble, Tinder bios)
- Social introductions in dating contexts
- Personal connection and attraction

REQUIREMENTS:
1. Extract key information:
   - Age and location (if mentioned)
   - Unique hobbies and interests
   - Personality traits and energy
   - Creative pursuits and adventures
   - What makes him stand out
   - Balance of professional and personal life
   - Values and what matters to him

2. Format as an attractive dating profile (2-3 short paragraphs):
   - First paragraph: Engaging hook that shows personality and confidence
   - Second paragraph: Interests, passions, and what he enjoys doing
   - Third paragraph: What makes him interesting or what he's looking for (if appropriate)

3. Style guidelines:
   - Confident but not arrogant
   - Authentic and genuine
   - Playful and charming
   - Show personality, not just list facts
   - Avoid clichés ("I love travel and food")
   - Be specific about interests
   - Light humor and wit are welcome
   - Emotionally intelligent tone

4. Make it appealing and authentic - something that would make someone want to know more about him. Focus on what makes him interesting as a person, not just his job.`,
  };

  const openModal = () => {
    console.log("Opening modal", modal);
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
      modal.classList.remove("c-tldr-modal__hidden");
      document.body.style.overflow = "hidden";
    } else {
      console.error("Modal not found when trying to open");
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
      modal.classList.add("c-tldr-modal__hidden");
      document.body.style.overflow = "";
      removeTLDRQueryParam();
    }
  };

  const generateTLDR = (category) => {
    const prompt = prompts[category];
    if (!prompt) {
      console.error("Invalid category:", category);
      return;
    }

    // Try URL parameter method first
    const encodedPrompt = encodeURIComponent(prompt);
    const chatgptUrl = `https://chat.openai.com/?q=${encodedPrompt}`;

    // Open ChatGPT with URL parameter
    window.open(chatgptUrl, "_blank");

    closeModal();
  };

  const init = () => {
    // Query DOM elements when initializing
    modal = document.getElementById("tldr-modal");
    openBtn = document.getElementById("tldr-generator-btn");
    closeBtn = modal?.querySelector(".c-tldr-modal__close");
    categoryButtons = modal?.querySelectorAll(".c-tldr-category");

    if (!modal || !openBtn) {
      console.error("TLDR Generator: Modal or button not found", {
        modal,
        openBtn,
      });
      return;
    }

    console.log("TLDR Generator initialized", {
      modal,
      openBtn,
      categoryButtons: categoryButtons?.length,
    });

    // Open modal
    openBtn.addEventListener("click", (e) => {
      setTLDRQueryParam();
      openModal();
    });

    // Close modal
    closeBtn?.addEventListener("click", closeModal);

    // Close on overlay click
    const overlay = modal.querySelector(".c-tldr-modal__overlay");
    overlay?.addEventListener("click", closeModal);

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
      }
    });

    // Handle category selection
    categoryButtons?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        generateTLDR(category);
      });
    });
  };

  return { init, openModal };
})();

/**
 * Checks if the URL contains ?show-tldr
 * @returns {boolean}
 */
const shouldShowTLDR = () => {
  const params = new URLSearchParams(window.location.search);
  return params.has("show-tldr");
};

const setTLDRQueryParam = () => {
  const url = new URL(window.location.href);
  url.searchParams.set("show-tldr", "true");
  history.pushState(null, "", url.toString());
};

const removeTLDRQueryParam = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("show-tldr");
  history.replaceState(null, "", url.toString());
};

const onReady = () => {
  faviconHandler();
  scrollManager();
  tldrGenerator.init();

  if (shouldShowTLDR()) {
    requestAnimationFrame(() => {
      tldrGenerator.openModal();

      // Clean URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete("show-tldr");
      history.replaceState(null, "", url.toString());
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}
