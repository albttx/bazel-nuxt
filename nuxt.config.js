import colors from 'vuetify/es5/util/colors';

// console.log('environment ', process.env);
console.log('nuxt.config.js', __filename);

var buildDir = process.argv.find((s) => s.startsWith('--buildDir='));
if (buildDir) {
	buildDir = buildDir.substr('--buildDir='.length);
}

export default {
	mode: 'universal',
	// Workaround https://cmty.app/nuxt/nuxt.js/issues/c9861
	// Support a --buildDir option to the nuxt CLI
	buildDir: buildDir,
	/*
  ** Headers of the page
  */
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [ '@nuxtjs/vuetify' ],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
	/*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
	vuetify: {
		customVariables: [ '~/assets/variables.scss' ],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {
			// cf: https://github.com/Globegitter/puppy_nuxt_app/blob/mp-build-file-generator/nuxt.config.js
			// config.resolve.modules = [ 'external/npm/node_modules' ];
			// config.resolve.symlinks = true;
		}
	}
};
