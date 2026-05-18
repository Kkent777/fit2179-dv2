const chartContainers = document.querySelectorAll("[data-spec]");
const navLinks = document.querySelectorAll(".nav-links a");
const backToTop = document.querySelector(".back-to-top");

function makeResponsive(spec) {
  const responsiveSpec = structuredClone(spec);

  delete responsiveSpec.title;

  const isComposedSpec = responsiveSpec.facet || responsiveSpec.repeat || responsiveSpec.hconcat || responsiveSpec.vconcat;

  if (!isComposedSpec && typeof responsiveSpec.width === "number") {
    responsiveSpec.width = "container";
    responsiveSpec.autosize = {
      type: "fit-x",
      contains: "padding"
    };
  }

  return responsiveSpec;
}

function showChartError(container, specUrl, error) {
  container.innerHTML = `
    <p class="chart-error">Unable to load <code>${specUrl}</code>. Check that the file exists in the specs folder.</p>
  `;
  console.error(`Could not render ${specUrl}`, error);
}

async function renderChart(container) {
  const specUrl = container.dataset.spec;

  try {
    const response = await fetch(specUrl, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const spec = await response.json();
    await vegaEmbed(container, makeResponsive(spec), {
      actions: false,
      renderer: "canvas"
    });
  } catch (error) {
    showChartError(container, specUrl, error);
  }
}

chartContainers.forEach(renderChart);

function updateBackToTop() {
  if (!backToTop) {
    return;
  }

  backToTop.classList.toggle("is-visible", window.scrollY > 520);
}

function updateActiveNav() {
  const sections = [...document.querySelectorAll("#read-guide, #part-1, #part-2, #part-3, #part-4, #part-5, #conclusion, #sources")];
  const current = sections
    .filter((section) => section.getBoundingClientRect().top < 130)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current && link.hash === `#${current.id}`);
  });
}

window.addEventListener("scroll", () => {
  updateBackToTop();
  updateActiveNav();
}, { passive: true });

updateBackToTop();
updateActiveNav();
