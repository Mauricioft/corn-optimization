import messagesES from 'vee-validate/dist/locale/es';

// please note that you must specify the name of the vuex module if it is
// different from i18n. i.e. Vue.use(vuexI18n.plugin, store, 'myName')
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'es', // si se necesita que el idioma sea dinamico cabiar este atributo por la variable del idioma selecinado
  dictionary: {
    es: {
      messages: messagesES.messages
    }
  },
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
};

export default config;