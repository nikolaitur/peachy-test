import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

import "swiper/css";
import "swiper/css/pagination";

$(document).ready(function () {
  if ($(window).width() <= 768) {
    new Swiper(".main-collection", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  $("[data-variant-selector]").on("change", function (e) {
    const price = $(this).find("option:selected").data("price");
    $(this).closest(".product-grid-item").find("button .price").html(price);
  });

  $("[data-add-to-cart]").on("click", function (e) {
    const variantId = $(this)
      .closest(".product-grid-item")
      .find("select")
      .val();
    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      data: {
        quantity: 1,
        id: variantId,
      },
      dataType: "json",
      success: function (data) {
        document.location.href = "/checkout";
      },
    });
  });
});
