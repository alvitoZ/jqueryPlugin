// saat mouse masuk

(function ($) {
  $.fn.semanticTabs = function (option) {
    var Settings = $.extend(
      {
        color: "red",
        transform: "scale(1.2)",
        display: "inline-block",
        transition: "0.5s",
        index: {
          index: [],
          color: "yellow",
        },
      },
      option
    );

    let nilai = this.text();

    const huruf = [...nilai]
      .map((e) => {
        return `<span class="coba">${e}</span>`;
      })
      .join(" ");

    $(this).html(huruf);
    console.log(huruf);

    const array = $(".coba");

    $(".coba").mouseenter(function () {
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

    $.each(Settings.index.index, function (e, i) {
      $(array[i]).mouseenter(function () {
        console.log(this);
        $(this).css({
          index: Settings.index.index,
          color: Settings.index.color,
        });
      });
    });

    $(".coba").mouseleave(function () {
      $(this).css({
        color: ``,
        transform: ``,
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
        index: {
          index: [],
          color: "",
        },
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

    const array = $(".coba");

    $.each(Settings.index.index, function (e, i) {
      $(array[i]).mouseleave(function () {
        $(this).css({
          index: Settings.index.index,
          color: Settings.index.color,
        });
      });
    });

    return this;
  };
})(jQuery);

// (function ($) {
//   $.fn.semanticTabs3 = function (option) {
//     var Settings = $.extend(
//       {
//         index: {
//           index: 4,
//           color: "yellow",
//         },
//       },
//       option
//     );

//     let nilai = this.text();

//     const huruf = [...nilai].map((e) => {
//       return `<span class="coba">${e}</span>`;
//     });

//     $(this).html(huruf);

//     const array = $(".coba");

//     $(array[Settings.index.index]).mouseenter(function () {
//       console.log(this);
//       $(this).css({
//         index: Settings.index.index,
//         color: Settings.index.color,
//         backgroundColor: "blue",
//       });
//     });

//     return this;
//   };
// })(jQuery);
