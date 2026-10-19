# B2C landing

Лендинг Sunmar. Компоненты Sunmarino подключает принимающая страница.
Нужна версия с нативными `button` / `a` внутри `sunmar-button`, слотом
`eyebrow` у `sunmar-kv` и наследованием настроек `sunmar-button-group`.
Документация: https://sunmarino.vercel.app/.

На 19.10.2026 страница Sunmar `/monkey/` подключала старый
`sunmarino-013iife.js`: его API кнопок и вкладок отличается от документации.
Перед публикацией нужно обновить библиотеку на принимающей странице;
повторное подключение новой версии после регистрации старых custom elements
не заменяет их. Лендинг не подменяет общую библиотеку сайта.

Логика Embla сохранена. Переключение подборок остаётся локальным;
кнопки оформлены через `sunmar-button-group`. Цвета поддерживают переменные
`--sunmarino-*` и прежние `--sunmar-*`.

В подборках пока остаются исходные заглушки «Блок 1» и «Блок 2».
Упоминание CoralBonus заменено нейтральным текстом без обещания бонусов.

```bash
b2c-landing-vite check
b2c-landing-vite dev
b2c-landing-vite build
```

Каждый файл `src/scripts/<block>.js` экспортирует функцию инициализации по
умолчанию. Builder вызывает её после добавления разметки блока:

```js
export default function init() {
  const block = document.querySelector(".welcome");
  if (!block) return;
}
```
