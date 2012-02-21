goog.provide('helpim.ui.Dialog');

goog.require('goog.ui.Dialog');

/**
 * @inheritDoc
 * @extends {goog.ui.Dialog}
 * Just like goog.ui.Dialog but accecpts multiple classnames for
 * opt_class separated by blanks. The first one is being passed as
 * argument to the goog.ui.Dialog constructor.
 */
helpim.ui.Dialog = function(opt_class, opt_useIframeMask, opt_domHelper) {
    opt_class = opt_class || "modal-dialog";
    opt_class = opt_class.split(" ");
    this.classes_ = opt_class.splice(1);
    goog.ui.Dialog.call(this, opt_class, opt_useIframeMask, opt_domHelper);
};
goog.inherits(helpim.ui.Dialog, goog.ui.Dialog);

/** @inheritDoc */
helpim.ui.Dialog.prototype.createDom = function() {
    goog.base(this, 'createDom');
    goog.dom.classes.add(this.getElement(), this.classes_);
};