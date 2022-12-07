(function ($) {
  $.fn.semanticTabs = function (option) {
    // var settings = $.extend(
    //   {
    //     transform: "scale(1.2)",
    //     color: "red",
    //     display: "inline-block",
    //     transition: "0.2s",
    //   },
    //   option
    // );

    let nilai = this.text();

    const huruf = [...nilai]
      .map((e) => {
        return `<span class="coba">${e}</span>`;
      })
      .join(" ");

    // console.log(huruf);

    // const hasil = $(this).html(huruf);
    $(this).html(huruf);
    console.log(huruf);
    // for (i = 0; i < huruf.length; i++) {
    //   $(huruf[i]).mouseenter(() => {
    //     this[i].css("color", "green");
    //     console.log("sd");
    //   });
    // }

    return this;
  };
})(jQuery);
