const map = new WeakMap();
const ob = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = map.get(entry.target);
            animation && animation.play();
            ob.unobserve(entry.target);
        }
    }
});

const popIn = {
    inserted(el, binding) {
        const { distance, duration } = binding.value;
        const animation = el.animate([
            { transform: `translateY(${distance}px)`, opacity: 0.5 },
            { transform: `translateY(0)`, opacity: 1 },
        ], {
            duration: duration,
            easing: 'ease-out',
            fill: 'forwards'
        });
        animation.pause();
        map.set(el, animation);
        ob.observe(el);
    },
    unbind(el) {
        ob.unobserve(el);
    }
};

const fontRed = {
    inserted(el) {
        el.style.color = 'red';
    }
};

export default {
    popIn,
    fontRed
};
