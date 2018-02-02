import MessageBox from './tpl';

export default MessageBox;

// let instance;
// let defaultConfig = {};

// const MessageBoxConstructor = Vue.extend(MessageBoxComponent);
// const initInstance = () => {
//   instance = new MessageBoxConstructor({
//     el: document.createElement('div'),
//   });
//   document.body.appendChild(instance.$el);
// };

// const MessageBox = (options = {}) => {
//   initInstance();
//   merge(instance.$data, defaultConfig);
//   instance.message = (typeof options === 'string') ? options : options.message;
//   instance.title = options.title || '提示';
//   instance.confirmText = options.confirmText || '确定';
//   Vue.nextTick(() => {
//     // DOM更新后再显示
//     instance.show = true;
//   });
// };
// /* eslint-disable no-shadow  */
// /* eslint-disable no-param-reassign  */
// export default {
//   install(config = {}) {
//     defaultConfig = config;
//     Vue.prototype.$messageBox = MessageBox;
//   },
// };

