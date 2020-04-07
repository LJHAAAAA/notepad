//设置记事本总元素
var $note = $('#notepad-app');

// 菜单元素
var menubar = new Menubar();

// 编辑区元素
var editor = new Editor();
var $editor = editor.init();
$note.append($editor.show());

// 字体区域设置
var dlgFont = new DlgFont(editor);
var $dlgFont = dlgFont.init();
$note.after($dlgFont);

// 点击外部使打开的菜单隐藏
$note.click(menubar.hideMenu.bind(menubar));
