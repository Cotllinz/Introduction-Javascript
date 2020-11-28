const arkFood = (harga, voucherDiskon, deliveryDistance, pajak) => {
  if (harga && deliveryDistance ) {
    if (
      typeof harga === "number" &&
      typeof voucherDiskon === "string" &&
      typeof deliveryDistance === "number" &&
      typeof pajak === "boolean"
    ) {
    
      // Pemotongan Harga
      let potongan =
        voucherDiskon === "ARKFOOD5" && harga >= 50000
          ? Math.round(harga * 0.5)
          : voucherDiskon === "DITRAKTIRDEMY" && harga >= 25000
          ? Math.round(harga * 0.6)
          : "Kamu tidak Menggunakan Voucher Diskon";

      // Maks Potongan Kondisi
      if (voucherDiskon === "ARKFOOD5" && potongan <= 50000) {
        potongan = potongan;
      } else if (voucherDiskon === "ARKFOOD5" && potongan >= 50000) {
        potongan = 50000;
      } else if (voucherDiskon === "DITRAKTIRDEMY" && potongan <= 30000) {
        potongan = potongan;
      } else if (voucherDiskon === "DITRAKTIRDEMY" && potongan >= 30000) {
        potongan = 30000;
      }

      // Delivery
      let delivery2Km = 5000;
      let delivery3km = 0;
      for (let i = 1; i <= deliveryDistance - 2; i++) {
        delivery3km += 3000;
      }
      let deliveryCost = 0;
      if (deliveryDistance > 2) {
        deliveryCost = delivery2Km + delivery3km;
      } else {
        deliveryCost = "Gratis Ongkos Kirim";
      }

      // Pajak
      let taxCost = pajak === true ? Math.round(harga * 0.05) : "Free tax";

      // Subtotal
      const subTotal =
        isNaN(potongan) && isNaN(deliveryCost) && isNaN(taxCost)
          ? "SubTotal Tidak Ditemukan"
          : isNaN(potongan)
          ? Math.round(harga + deliveryCost + taxCost)
          : isNaN(deliveryCost)
          ? Math.round(harga - potongan + taxCost)
          : isNaN(taxCost)
          ? Math.round(harga - potongan + deliveryCost)
          : Math.round(harga - potongan + deliveryCost + taxCost);

      return console.log(
        `Harga       : ${harga} \nPotongan    : ${potongan} \nBiaya Antar : ${deliveryCost} \nPajak       : ${taxCost} \nSubTotal    : ${subTotal}`
      );
    } else {
      console.log(
        "Semua inputanmu telah terisi, tetapi kamu salah memberikan valuenya. Cek Kembali"
      );
    }
  } else {
    console.log("Harga atau jarak pengiriman belum terisi coba cek kembali");
  }
};

arkFood(75000, "ARKFOOD5", 5, true);
