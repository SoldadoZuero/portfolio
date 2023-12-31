/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',
        '../../base_templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    prefix: 'tw-',
    theme: {
        extend: {
            colors: {
                'chrysler_blue': '#4923DE',
                'madder': '#9E0031',
                'chocolate_cosmos': '#44001A',
                'persian_green': '#1B998B',
                'non_photo_blue': '#8AC6D0',
                'razzmatazz': '#E40066',
                'ultra_violet': '#484D6D',
            },
            spacing: {
                'header-36px': '36px',
                'bgy-code': '323px',
                'bgx-code': '768px',
            },
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
            },
            backgroundImage: {
                'header_code': "url(/media/header-code.png)"
            },
            backgroundSize: {
                '100%': '100%'
            }
        },
        fontFamily: {
            tilt_prism: ['Tilt Prism', 'cursive'],
            courgette: ['Courgette', 'cursive'],
            lobster: ['Lobster', 'cursive'],
            poiret_one: ['Poiret One', 'cursive'],
            fredericka: ['Fredericka the Great', 'cursive'],
            satisfy: ['Satisfy', 'cursive'],
            rem: ['REM', 'sans-serif'],
            limelight: ['Limelight', 'cursive']
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
