import QuemSouEu from './componentes/quem-sou-eu.js';
import OQueFaco  from './componentes/o-que-faco.js';
import Hobbies   from './componentes/hobbies.js';

const { createApp } = window.Vue;

const app = createApp({
  data() {
    return {
      currentRoute: window.location.hash.replace('#', '') || 'quem-sou-eu',

      profile: {
        nome: 'Weber Souza',
        email:'webersouza@gmail.com'
      },

      routes: [
        { path: 'quem-sou-eu', label: 'Quem Sou Eu?', component: QuemSouEu },
        { path: 'o-que-faco',  label: 'O Que Faço?',  component: OQueFaco  },
        { path: 'hobbies',     label: 'Hobbies',      component: Hobbies   },
      ],

      socials: [
        { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/weber_souza_cba/' },
        { icon: 'facebook',  label: 'Facebook',  href: 'https://www.facebook.com/weber.souza.524/' },
        { icon: 'github',    label: 'GitHub',    href: 'https://github.com/SEU_USUARIO_GITHUB' } // Ajuste aqui
      ],
    };
  },

  computed: {
    activeComponent() {
      const r = this.routes.find(r => r.path === this.currentRoute);
      return r ? r.component : this.routes[0].component;
    }
  },

  methods: {
    syncRoute() {
      this.currentRoute = window.location.hash.replace('#', '') || 'quem-sou-eu';
    }
  },

  mounted() {
    window.addEventListener('hashchange', this.syncRoute);
    if (window.feather) window.feather.replace();
  },

  updated() {
    if (window.feather) window.feather.replace();
  },

  beforeUnmount() {
    window.removeEventListener('hashchange', this.syncRoute);
  }
});

app.mount('#app');