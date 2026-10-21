export function sticky_button_back() {
    const navContainer = document.querySelector('.hotel_tabs__nav');
    const stickyBlock = document.getElementById('hotel_button_back');
    const parentSection = stickyBlock?.closest('.hotel_tabs_bf2026');

    if (!navContainer || !stickyBlock) return;

    navContainer.style.minHeight = `${stickyBlock.offsetHeight || 48}px`;

    const checkPosition = () => {
        const rect = navContainer.getBoundingClientRect();

        if (rect.top > window.innerHeight - 80) {
            stickyBlock.classList.add('is-fixed');
            if (parentSection) parentSection.style.zIndex = '9999';
        } else {
            stickyBlock.classList.remove('is-fixed');
            if (parentSection) parentSection.style.zIndex = '';
        }
    };

    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition, { passive: true });

    checkPosition();
}