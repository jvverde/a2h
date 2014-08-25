
describe("A test suite", function() {
   beforeEach(function() {});
   afterEach(function() { });
   it('a2h(abc)="616263"', function() { expect(hexUTF8.a2h('abc')).to.be.equal('616263'); });
   it('h2a(a2h((𝜀))="𝜀"', function() { expect(hexUTF8.h2a(hexUTF8.a2h('𝜀'))).to.be.equal('𝜀'); });
   it('h2a(a2h((𝜁𝜀))="𝜁𝜀"', function() { expect(hexUTF8.h2a(hexUTF8.a2h('𝜁𝜀'))).to.be.equal('𝜁𝜀'); });
   it('Japanese', function() { 
      expect(hexUTF8.h2a(hexUTF8.a2h('コードを洗練させる、という短い工程を繰り返すスタイルである。多')))
      .to.be.equal('コードを洗練させる、という短い工程を繰り返すスタイルである。多'); 
    });   
   it('Arabic', function() { 
      expect(hexUTF8.h2a(hexUTF8.a2h('أوتوماتيكية فاشلة ويجب على حالة الفحص هذه أن تعرّف')))
      .to.be.equal('أوتوماتيكية فاشلة ويجب على حالة الفحص هذه أن تعرّف'); 
    });   
   it('Bulgarian', function() { 
      expect(hexUTF8.h2a(hexUTF8.a2h('при който се спазва следният работен цикъл: първо се пишат')))
      .to.be.equal('при който се спазва следният работен цикъл: първо се пишат'); 
    });   
   it('Czech', function() { 
      expect(hexUTF8.h2a(hexUTF8.a2h('stále se opakujících krocích, vedoucích ke zefektivnění celého vývoje')))
      .to.be.equal('stále se opakujících krocích, vedoucích ke zefektivnění celého vývoje'); 
    });
   it('Korean', function() { 
      expect(hexUTF8.h2a(hexUTF8.a2h('클을 반복하는 소프트웨어 개발 프로세스 중 하나')))
      .to.be.equal('클을 반복하는 소프트웨어 개발 프로세스 중 하나'); 
    });
  it('a2h(ಪೋರ್ಚುಗwಲ್)="e0b2aae0b38be0b2b0e0b38de0b29ae0b381e0b29777e0b2b2e0b38d"', function() { 
      expect(hexUTF8.a2h('ಪೋರ್ಚುಗwಲ್')).to.be.equal('e0b2aae0b38be0b2b0e0b38de0b29ae0b381e0b29777e0b2b2e0b38d'); 
  });
  it('a2h(പോര്ച്ചുഗല്)="e0b4aae0b58be0b4b0e0b58de0b49ae0b58de0b49ae0b581e0b497e0b4b2e0b58d"', function() { 
      expect(hexUTF8.a2h('പോര്ച്ചുഗല്')).to.be.equal('e0b4aae0b58be0b4b0e0b58de0b49ae0b58de0b49ae0b581e0b497e0b4b2e0b58d'); 
  });
  it('a2h(ประเทศโปรตุเกส)="e0b89be0b8a3e0b8b0e0b980e0b897e0b8a8e0b982e0b89be0b8a3e0b895e0b8b8e0b980e0b881e0b8aa"', function() { 
      expect(hexUTF8.a2h('ประเทศโปรตุเกส')).to.be.equal('e0b89be0b8a3e0b8b0e0b980e0b897e0b8a8e0b982e0b89be0b8a3e0b895e0b8b8e0b980e0b881e0b8aa'); 
  });
  it('a2h(པོར་ཅུ་གལ་)="e0bd94e0bdbce0bda2e0bc8be0bd85e0bdb4e0bc8be0bd82e0bda3e0bc8b"', function() { 
      expect(hexUTF8.a2h('པོར་ཅུ་གལ་')).to.be.equal('e0bd94e0bdbce0bda2e0bc8be0bd85e0bdb4e0bc8be0bd82e0bda3e0bc8b'); 
  });
  it('a2h(ፖርቱጋል)="e18d96e188ade189b1e18c8be1888d"', function() { 
      expect(hexUTF8.a2h('ፖርቱጋል')).to.be.equal('e18d96e188ade189b1e18c8be1888d'); 
  });
  it('a2h(포르투갈)="ed8faceba5b4ed88aceab088"', function() { 
      expect(hexUTF8.a2h('포르투갈')).to.be.equal('ed8faceba5b4ed88aceab088'); 
  });   
  it('a2h(პორტუგალია)="e1839ee1839de183a0e183a2e183a3e18392e18390e1839ae18398e18390"', function() { 
      expect(hexUTF8.a2h('პორტუგალია')).to.be.equal('e1839ee1839de183a0e183a2e183a3e18392e18390e1839ae18398e18390'); 
  });   
  it('a2h(Puortogalėjė)="50756f72746f67616cc4976ac497"', function() { 
      expect(hexUTF8.a2h('Puortogalėjė')).to.be.equal('50756f72746f67616cc4976ac497'); 
  });
  it('a2h(Bồ Đào Nha)="42e1bb9320c490c3a06f204e6861"', function() { 
      expect(hexUTF8.a2h('Bồ Đào Nha')).to.be.equal('42e1bb9320c490c3a06f204e6861'); 
  });
  it('a2h(puɾtuˈɣaɫ)="7075c9be7475cb88c9a361c9ab"', function() { 
      expect(hexUTF8.a2h('puɾtuˈɣaɫ')).to.be.equal('7075c9be7475cb88c9a361c9ab'); 
  });
  it('a2h(Πορτογαλική)="cea0cebfcf81cf84cebfceb3ceb1cebbceb9cebaceae"', function() { 
      expect(hexUTF8.a2h('Πορτογαλική')).to.be.equal('cea0cebfcf81cf84cebfceb3ceb1cebbceb9cebaceae'); 
  });  
  it('Currency"', function() { 
      expect(hexUTF8.a2h('₳ ฿ ￠ ₡ ¢ ₢ ₵ ₫ € ￡ £ ₤ ₣ ƒ ₲ ₭ ₥ ₦ ₱ ＄ $ ₮ ₩ ￦ ¥ ￥ ₴ ¤ ₰ ៛ ₪ ₯ ₠ ₧ ₨ ௹ ﷼ ㍐ ৲ ৳ ₹'))
      .to.be.equal('e282b320e0b8bf20efbfa020e282a120c2a220e282a220e282b520e282ab20e282ac20efbfa120c2a320e282a420e282a320c69220e282b220e282ad20e282a520e282a620e282b120efbc84202420e282ae20e282a920efbfa620c2a520efbfa520e282b420c2a420e282b020e19f9b20e282aa20e282af20e282a020e282a720e282a820e0afb920efb7bc20e38d9020e0a7b220e0a7b320e282b9'); 
  });  
  it('Currency"', function() { 
      expect(hexUTF8.a2h('☂ ☔ ✈ ☀ ☼ ☁ ⚡ ⌁ ☇ ☈ ❄ ❅ ❆ ☃ ☉ ☄ ★ ☆ ☽ ☾ ⌛ ⌚ ⌂ ⏧ ✆ ☎ ☏ ✉ ☑ ✓ ✔ ⎷ ⍻ ✖ ✗ ✘ ☒ ✕ ☓ ☕ ♿ ✌ ☚ ☛ ☜ ☝ ☞ ☟ ☹ ☺ ☻ ☯ ⚘ ☮ ⚰ ⚱ ⚠ ☠ ☢ ⚔ ⚓ ⎈ ⚒ ⚑ ⚐ ☡ ❂ ⚕ ⚖ ⚗ ✇ ☣ ⚙ ☤ ⚚ ⚛ ⚜ ☥ ✝ ☦ ☧ ☨ ☩ † ☪ ☫ ☬ ☭ ✁ ✂ ✃ ✄ ✍ ✎ ✏ ✐  ✑ ✒ ✙ ✚ ✜ ✛ ♰ ♱ ✞ ✟ ✠ ✡ ☸ ✢ ✣ ✤ ✥ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✲ ✱ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ❀ ✿ ❁ ❃ ❇ ❈ ❉ ❊ ❋ ⁕ ☘ ❦ ❧ ☙ ❢ ❣ ♀ ♂ ⚲ ⚢ ⚣ ⚤ ⚥ ⚦ ⚧ ⚨ ⚩ ☿ ♁ ⚯ ♛ ♕ ♚ ♔ ♜ ♖ ♝ ♗ ♞ ♘ ♟ ♙ ☗ ☖ ♠ ♣ ♦ ♥ ❤ ❥ ♡ ♢ ♤ ♧ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ⚇ ⚆ ⚈ ⚉ ♨ ♩ ♪ ♫ ♬ ♭ ♮ ♯  ⌨ ⏏ ⎗ ⎘ ⎙ ⎚ ⌥ ⎇ ⌘ ⌦ ⌫ ⌧ ♲ ♳ ♴ ♵ ♶ ♷ ♸ ♹ ♺ ♻ ♼ ♽ ⁌ ⁍ ⎌ ⌇ ⌲ ⍝ ⍟ ⍣ ⍤ ⍥ ⍨ ⍩ ⎋ ♃ ♄ ♅ ♆ ♇ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⏚ ⏛'))
      .to.be.equal('e2988220e2989420e29c8820e2988020e298bc20e2988120e29aa120e28c8120e2988720e2988820e29d8420e29d8520e29d8620e2988320e2988920e2988420e2988520e2988620e298bd20e298be20e28c9b20e28c9a20e28c8220e28fa720e29c8620e2988e20e2988f20e29c8920e2989120e29c9320e29c9420e28eb720e28dbb20e29c9620e29c9720e29c9820e2989220e29c9520e2989320e2989520e299bf20e29c8c20e2989a20e2989b20e2989c20e2989d20e2989e20e2989f20e298b920e298ba20e298bb20e298af20e29a9820e298ae20e29ab020e29ab120e29aa020e298a020e298a220e29a9420e29a9320e28e8820e29a9220e29a9120e29a9020e298a120e29d8220e29a9520e29a9620e29a9720e29c8720e298a320e29a9920e298a420e29a9a20e29a9b20e29a9c20e298a520e29c9d20e298a620e298a720e298a820e298a920e280a020e298aa20e298ab20e298ac20e298ad20e29c8120e29c8220e29c8320e29c8420e29c8d20e29c8e20e29c8f20e29c9020efa08220e29c9120e29c9220e29c9920e29c9a20e29c9c20e29c9b20e299b020e299b120e29c9e20e29c9f20e29ca020e29ca120e298b820e29ca220e29ca320e29ca420e29ca520e29ca620e29ca720e29ca920e29caa20e29cab20e29cac20e29cad20e29cae20e29caf20e29cb020e29cb220e29cb120e29cb320e29cb420e29cb520e29cb620e29cb720e29cb820e29cb920e29cba20e29cbb20e29cbc20e29cbd20e29cbe20e29d8020e29cbf20e29d8120e29d8320e29d8720e29d8820e29d8920e29d8a20e29d8b20e2819520e2989820e29da620e29da720e2989920e29da220e29da320e2998020e2998220e29ab220e29aa220e29aa320e29aa420e29aa520e29aa620e29aa720e29aa820e29aa920e298bf20e2998120e29aaf20e2999b20e2999520e2999a20e2999420e2999c20e2999620e2999d20e2999720e2999e20e2999820e2999f20e2999920e2989720e2989620e299a020e299a320e299a620e299a520e29da420e29da520e299a120e299a220e299a420e299a720e29a8020e29a8120e29a8220e29a8320e29a8420e29a8520e29a8720e29a8620e29a8820e29a8920e299a820e299a920e299aa20e299ab20e299ac20e299ad20e299ae20e299af20efa3bf20e28ca820e28f8f20e28e9720e28e9820e28e9920e28e9a20e28ca520e28e8720e28c9820e28ca620e28cab20e28ca720e299b220e299b320e299b420e299b520e299b620e299b720e299b820e299b920e299ba20e299bb20e299bc20e299bd20e2818c20e2818d20e28e8c20e28c8720e28cb220e28d9d20e28d9f20e28da320e28da420e28da520e28da820e28da920e28e8b20e2998320e2998420e2998520e2998620e2998720e2998820e2998920e2998a20e2998b20e2998c20e2998d20e2998e20e2998f20e2999020e2999120e2999220e2999320e28f9a20e28f9b'); 
  });
});