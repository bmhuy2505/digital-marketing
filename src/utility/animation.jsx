export const slideUp = (delay) => {
    return {
        initial: {
            y: 60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

export const slideDown = (delay) => {
    return {
        initial: {
            y: -60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

export const slideLeft = (delay) => {
    return {
        initial: {
            x: 60,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};
