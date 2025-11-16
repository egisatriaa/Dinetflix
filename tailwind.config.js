module.exports = {
    content: ['./*.html', './src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                netflix: ['NetflixSans', 'sans-serif'],
            },
            backgroundImage: {
                gradientDark: 'linear-gradient(160deg, #000000 0%, #1b1b2f 30%, #261d33 60%, #3a1d2b 100%)',
            },
        },
    },
    plugins: [],
};
