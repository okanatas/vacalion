var itemImages = [
    {
      src: 'images/img1.jpg',
      location: 'TORONTO - Yonge-Dundas Square',
      pname: 'Studio Apartment in Downtown',
      off: 'no',
      newprice: ' CA$154.99',
      alt: 'Rental Image Not Available'
    },
    {
      src: 'images/img2.jpg',
      location: 'OTTAWA - Baseline Rd',
      pname: 'Room near Vineyard Ottawa Church',
      off: 'yes',
      oldprice: 'CA$123.99',
      newprice: ' CA$104.89',
      alt: 'Rental Image Not Available'
    },
    {
      src: 'images/img3.jpg',
      location: 'KINGSTON - Gardiners Rd',
      pname: 'Apartment near Cataraqui Town Centre',
      off: 'no',
      newprice: 'CA$108.00',
      alt: 'Rental Image Not Available'
    },
    {
      src: 'images/img4.jpg',
      location: 'TORONTO - Bloor St West',
      pname: 'Studio Apartment in Downtown',
      off: 'no',
      newprice: 'CA$132.50',
      alt: 'Rental Image Not Available'
    },
    {
      src: 'images/img5.jpg',
      location: 'TORONTO - King St West',
      pname: 'Condo in King St West',
      off: 'yes',
      oldprice: 'CA$129.99',
      newprice: ' CA$109.99',
      alt: 'Rental Image Not Available'
    },
    {
      src: 'images/img6.jpg',
      location: 'QUEBEC CITY - Chemin Saint-Louis',
      pname: 'Condo in Downtown',
      off: 'yes',
      oldprice: 'CA$121.00',
      newprice: ' CA$98.00',
      alt: 'Rental Image Not Available'
    }
  ];
  
  function func1() {
    var imageContainer = document.querySelector('.product-item');
  
    var str = '<div class="item">' + '<div class="item-image">' + '<div class="img-hover-zoom">';
  
    var myImageStr = '\0';
    var a = '\0';
    var b = '\0';
    for (var i = 0; i < 6; i++) {
      a =
        '<img src="' +
        itemImages[i].src +
        '" alt="' +
        itemImages[i].alt +
        '"></div>' +
        '<div class="item-button"><a href="#">Reserve</a>' +
        '<a href="#">Details</a></div></div><div class="item-title">' +
        '<div class="location"><h5>' +
        itemImages[i].location +
        '</h5></div>'+
  
        '<h5>' +
        itemImages[i].pname +
        '</h5>';
  
      if (itemImages[i].off === 'yes') {
        b =
          '<p><del>' +
          itemImages[i].oldprice +
          '</del>' +
          itemImages[i].newprice + '/night' +
          '</p></div></div></div>';
      } else {
        b = '<p>' + itemImages[i].newprice + '/night' + '</p></div></div></div>';
      }
  
      myImageStr += str + a + b;
    }
  
    imageContainer.innerHTML = myImageStr;
  }
  
  function start() {
    func1();
  }
  window.onload = start;
  