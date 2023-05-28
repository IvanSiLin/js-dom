export default () => {
  // BEGIN
  const tabs = Array.from(document.querySelectorAll('[data-bs-toggle="tab"]'));

  tabs.forEach((tab) => {
    const targetSelector = tab.dataset.bsTarget;

    tab.addEventListener('click', (event) => {
      event.preventDefault();

      const currentTab = event.target;
      const activeTab = document.querySelector('[data-bs-toggle="tab"].active');
      const activeContentTab = document.querySelector('.tab-pane.active');
      const targetTab = document.querySelector(targetSelector);

      if (currentTab === activeTab && targetTab === activeContentTab) {
        return;
      }

      if (activeTab && activeContentTab) {
        activeTab.classList.remove('active');
        activeContentTab.classList.remove('active');
      }

      currentTab.classList.add('active');
      targetTab.classList.add('active');
    });
  });
  
  // END
};

