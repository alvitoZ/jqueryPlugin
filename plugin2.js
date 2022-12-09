//saat mouse masuk

(function ($) {
  $.fn.semanticTabs = function (option) {
    var Settings = $.extend(
      {
        color: "red",
        transform: "scale(1.2)",
        display: "inline-block",
        transition: "0.5s",
      },
      option
    );

    // var afterSettings = $.extend(
    //   {
    //     after: {
    //       color: "",
    //       transform: "",
    //       display: "",
    //       transition: "",
    //     },
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

    $(".coba").mouseenter(function (e) {
      //   console.log($(e.target).text());
      //   console.log($(this).text());
      console.log(this);
      $(this).css({
        color: Settings.color,
        transform: Settings.transform,
        display: Settings.display,
        transition: Settings.transition,
      });
    });

    $(".coba").mouseleave(function () {
      $(this).css({
        color: ``,
        transform: ``,
        display: ``,
        transition: ``,
      });
    });

    return this;
  };
})(jQuery);

//saat mouse keluar

(function ($) {
  $.fn.semanticTabs2 = function (option) {
    var Settings = $.extend(
      {
        color: "",
        transform: "",
        display: "",
        transition: "",
      },
      option
    );

    $(".coba").mouseleave(function () {
      $(this).css({
        color: `${Settings.color}`,
        transform: `${Settings.transform}`,
        display: `${Settings.display}`,
        transition: `${Settings.transition}`,
      });
    });

    return this;
  };
})(jQuery);
