/*      

    let data = voucherDiskon
        ? Number(
            dataPotongan
              .map((element) =>
                voucherDiskon === element.voucherName &&
                harga >= element.rules.minPurchase
                  ? harga * element.rules.discount
                  : ""
              )
              .join("")
          )
        : "Potongan Tidak Ada";
      console.log(data); 
      
      */


      /// cara gunain if
     /*  

     let get;
      if (voucherDiskon) {
        let potongan = dataPotongan.map((element) => {
          if (
            element.voucherName === voucherDiskon &&
            harga >= element.rules.minPurchase
          ) {
            get = harga * element.rules.discount;
          }
        });
      } else {
        get = "Potongan gak bisa";
      }
      console.log(get); 
      
      */


        /* 
        const dataPotongan = [
          {
            voucherName: "ARKFOOD5",
            rules: {
              minPurchase: 50000,
              discount: 0.5,
              maxPurchase: 50000,
            },
          },
          {
            voucherName: "DITRAKTIRDEMY",
            rules: {
              minPurchase: 25000,
              discount: 0.6,
              maxPurchase: 30000,
            },
          },
        ];
        let get;
        if (voucherDiskon) {
          dataPotongan.map((element) => {
            if (
              element.voucherName === voucherDiskon &&
              harga >= element.rules.minPurchase
            ) {
              get = harga * element.rules.discount;
            }
          });
        } else {
          get = "Potongan gak bisa";
        }
        console.log(get); 
        
        */