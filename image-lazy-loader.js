(() => {
    const offset = 200

    /**
     * Check if an image is in the viewport.
     * 
     * @param {Image} img Image to check
     * @returns {Boolean}
     */
    const isInViewPort = (img) => {
        return (img.getBoundingClientRect().y < window.innerHeight + offset)
    }

    /**
     * Load an image
     * 
     * @param {Image} img image you need to load
     */
    const load = (img) => {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
    }

    /**
     * Lazy loads images
     */
    const lazy = () => {
        document.querySelectorAll("[data-src]")
            .forEach(img => {
                if(isInViewPort(img)) {
                    load(img)
                }
        })
    }

    lazy()
    window.addEventListener('scroll', lazy)
})()