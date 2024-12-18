let currentSVG = null;

// 道路滚动事件
function updateRoadScroll() {
  let scrollTop = window.pageYOffset;

  if (currentSVG) {
    let viewBoxY = scrollTop * 1.5; // 根据滚动调整 viewBox 的 y 值
    currentSVG.setAttribute('viewBox', `0 ${viewBoxY} 900 1000`); // 只显示新的区域，高度固定为 1000
  }
}

// 限制滚动事件触发频率，使用 requestAnimationFrame 提升性能
let ticking = false;
window.addEventListener('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      updateRoadScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// 早市与黄昏市场的切换功能
document.addEventListener("DOMContentLoaded", function () {
  const switchToggle = document.getElementById("pricing-plan-switch");
  const morningMarket = document.getElementById("content-morning-market");
  const eveningMarket = document.getElementById("content-evening-market");
  const morningMarketSVG = document.getElementById('road-svg-morning'); // 早市道路的 SVG
  const eveningMarketSVG = document.getElementById('road-svg-evening'); // 黄昏市场道路的 SVG
  const modalMorning = document.getElementById("modal-morning");
  const modalEvening = document.getElementById("modal-evening");

  // 初始化市场显示状态
  function updateMarketVisibility() {
    if (switchToggle.checked) {
      eveningMarket.classList.add("active");
      morningMarket.classList.remove("active");
      currentSVG = eveningMarketSVG; // 切换到黄昏市场的道路
    } else {
      morningMarket.classList.add("active");
      eveningMarket.classList.remove("active");
      currentSVG = morningMarketSVG; // 切换到早市的道路
    }

    // 每次切换市场时，更新道路滚动
    updateRoadScroll();
  }

  // 初始化时根据开关状态显示正确的市场
  updateMarketVisibility();

  // 监听切换事件
  switchToggle.addEventListener("change", function () {
    updateMarketVisibility();
  });

  // 当点击按钮时，显示模态框
  const buttons = document.querySelectorAll('.road-element');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      if (switchToggle.checked) {
        modalEvening.style.display = 'block'; // 黄昏市场模态框
      } else {
        modalMorning.style.display = 'block'; // 早市模态框
      }
    });
  });

  // 关闭模态框的功能
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      modalMorning.style.display = 'none';
      modalEvening.style.display = 'none';
    });
  });

  // 点击模态框外部时，隐藏模态框
  window.addEventListener('click', function (event) {
    if (event.target === modalMorning || event.target === modalEvening) {
      modalMorning.style.display = 'none';
      modalEvening.style.display = 'none';
    }
  });
});

 const buttonsMorning = document.querySelectorAll('#content-morning-market .road-element');
    const buttonsEvening = document.querySelectorAll('#content-evening-market .road-element');
    const modalMorning = document.getElementById('modal-morning');
    const modalEvening = document.getElementById('modal-evening');
    const closeButtons = document.querySelectorAll('.close');

    const vendorData = {
      'morning-vendor1': {
        name: '萵苣攤販',
        product: '當季蔬菜(目前販售明目萵苣)',
        price: '明目萵苣 $50/3把',
        time: '每天7:00 ~ 10:30',
        location: '嘉義縣民雄鄉復興路28號',
        image: 'https://i.imgur.com/M7BwOGM.png',
        chat: [
          { sender: 'receiver', text: '婆婆~這些蔬菜看起來都好新鮮喔!' },
          { sender: 'sender', text: '沒錯!這些都是早上現摘的，有機的沒有使用農藥呦' },
          { sender: 'receiver', text: '這是什麼蔬菜呀 在市面上好像很少見？' },
          { sender: 'sender', text: '這是明目萵苣，有護眼效果，而且具有養生價值呦！' },
          { sender: 'receiver', text: '那這個買回家可以怎麼煮呀？' },
          { sender: 'sender', text: '可以川燙、清炒，煮麵的時候也可以加喔' },
          { sender: 'receiver', text: '喔～感覺蠻簡單的耶!' },
          { sender: 'sender', text: '那你再看看，需要什麼在跟我說～' }
        ],
        friends: [
          { name: '紅蘿蔔攤販', image: 'https://i.imgur.com/UlQXbq9.png' },
          { name: '紅心芭樂攤販', image: 'https://i.imgur.com/yPQKvuN.png' }
        ]
      },
      'morning-vendor2': {
        name: '紅蘿蔔攤販',
        product: '當季蔬菜(目前販售地瓜葉、紅蘿蔔)',
        price: '地瓜葉 $50/1把',
        time: '每天7:00 ~ 10:30',
        location: '嘉義縣民雄鄉昇平路17號',
        image: 'https://i.imgur.com/UlQXbq9.png',
        chat: [
          { sender: 'receiver', text: '大姐～這些菜都是自己種的嗎？' },
          { sender: 'sender', text: '這邊這些地瓜葉是自己種的～' },
          { sender: 'receiver', text: '那這邊這些紅蘿蔔呢?也是自己種的嗎?' },
          { sender: 'sender', text: '胡蘿蔔是跟朋友拿的。朋友種植的胡蘿蔔可是有產銷履歷的呦！' },
          { sender: 'receiver', text: '喔！那份量的話可以自己看要多少自己挑嗎' },
          { sender: 'sender', text: '當然可以！吃多少買多少，看你需要多少，可以自己抓一下份量'},
        ],
        friends: [
          { name: '萵苣攤販', image: 'https://i.imgur.com/T2kFEEx.png' },
          { name: '紅心芭樂攤販', image: 'https://i.imgur.com/yPQKvuN.png' }
        ]
      },'morning-vendor3': {
        name: '紅心芭樂攤販',
        product: '當季蔬菜(目前販售絲瓜、皇宮菜、紅心芭樂為主)',
        price: '紅心芭樂 $50/3顆',
        time: '每天7:00 ~ 11:00',
        location: '嘉義縣民雄鄉復興路48號',
        image: 'https://i.imgur.com/yPQKvuN.png',
        chat: [
          { sender: 'sender', text: '來～看看需要什麼，這邊有紅心芭樂還有各種蔬菜' },
          { sender: 'receiver', text: '婆婆，這些芭樂是自己家裡種的嗎？' },
          { sender: 'sender', text: '對，你看到的這些蔬菜、水果都是我們家自己種的，都是有機的呦！' },
          { sender: 'receiver', text: '那婆婆為什麼想要自己種呢？你平常也會吃自己種的蔬果嗎？' },
          { sender: 'sender', text: '會啊！主要是想讓自己吃的安心一點，也才敢拿出來賣給人家～'},
          { sender: 'receiver', text: '原來是這樣～現在大家也都很重視食安問題～' },
          { sender: 'sender', text: '對呀～那你看看有沒有需要什麼'},
        ],
        friends: [
          { name: '萵苣攤販', image: 'https://i.imgur.com/T2kFEEx.png' },
          { name: '紅蘿蔔攤販', image: 'https://i.imgur.com/UlQXbq9.png' }
        ]
      },'evening-vendor1': {
        name: '小番茄攤販',
        product: '小番茄',
        price: '小番茄 $30/1台斤',
        time: '每天14:00 ~ 16:00',
        location: '民雄166縣道與工業二路的交叉路口',
        image: 'https://i.imgur.com/8o3Ey8P.png',
        chat: [
          { sender: 'receiver', text: '阿姨您好~想詢問你是民雄在地人嗎?' },
          { sender: 'sender', text: '是呀!我家就在附近而已!這些蔬菜水果都是家裡自己種的!' },
          { sender: 'receiver', text: '那這個小番茄會甜的嗎?' },
          { sender: 'sender', text: '很甜!我拿幾顆給你們嘗嘗看!' },
          { sender: 'receiver', text: '可是這一袋番茄的份量看起來有點多，我一個人可能吃不完' },
          { sender: 'sender', text: '沒關係!這邊有散裝的!可以秤重，看你想買多少都可以~' }
        ],
        friends: [
          { name: '龍鬚菜攤販', image: 'https://i.imgur.com/iGc4hIe.png' },
          { name: '蓮藕攤販', image: 'https://i.imgur.com/BRuXNsz.png' },
          { name: '鳳梨攤販', image: 'https://i.imgur.com/WaYNgB2.png' }
        ]
      },'evening-vendor2': {
        name: '龍鬚菜攤販',
        product: '龍鬚菜、桂竹筍',
        price: '龍鬚菜 2把 / $50 、桂竹筍 1包(大概5-6根) / $100',
        time: '每周二、周五 下午14:00 ~ 17:00',
        location: '民雄166縣道',
        image: 'https://i.imgur.com/iGc4hIe.png',
        chat: [
          { sender: 'receiver', text: '阿姨好，這些龍鬚菜是自產自銷嗎?' },
          { sender: 'sender', text: '對呀!我們是從斗六過來擺攤的' },
          { sender: 'receiver', text: '喔!斗六? 那距離這邊還蠻遠的耶!' },
          { sender: 'sender', text: '還好啦~我們在這邊也累積蠻多忠實顧客的!' },
          { sender: 'receiver', text: '那這些菜都是每天現採的嗎?' },
          { sender: 'sender', text: '對呀，我們每天半夜三點就到菜園工作了' },
          { sender: 'sender', text: '而且我們的龍鬚菜是有申請產銷履歷的呦!' },
          { sender: 'receiver', text: '半夜三點!!你們不會覺得很累嗎!'},
          { sender: 'sender', text: '早就習慣啦~只要對種菜有熱情!只要就會堅持下去' },
          { sender: 'sender', text: '收到客人的正面回饋，我們也非常開心和滿足~' }
        ],
        friends: [
          { name: '小番茄攤販', image: 'https://i.imgur.com/8o3Ey8P.png' },
          { name: '蓮藕攤販', image: 'https://i.imgur.com/BRuXNsz.png' },
          { name: '鳳梨攤販', image: 'https://i.imgur.com/WaYNgB2.png' }
        ]
      },'evening-vendor3': {
        name: '蓮藕攤販',
        product: '蓮藕、蔬果類',
        price: '',
        time: '每天下午 16:30 ~ 18:00',
        location: '民雄166縣道',
        image: 'https://i.imgur.com/BRuXNsz.png',
        chat: [
          { sender: 'receiver', text: '阿姨您好~想詢問這邊的蔬果都是自己家裡種的嗎?' },
          { sender: 'sender', text: '這邊都是幫朋友賣的比較多，但也是朋友家自己種的!' },
          { sender: 'sender', text: '我家主要是種植蓮藕的!但是產季還沒到' },
          { sender: 'receiver', text: '喔!我知道蓮藕也是民雄在地盛產的作物之一!' },
          { sender: 'sender', text: '對!你說的沒錯!' },
          { sender: 'receiver', text: '那蓮藕的盛產期大概在甚麼時候呀?' },
          { sender: 'sender', text: '大概從每年的5月底開始一直到隔年1月' },
          { sender: 'receiver', text: '蓮藕有推薦可以做什麼料理嗎?' },
          { sender: 'sender', text: '蓮藕的話，川燙跟涼拌是最簡單的方式' },
          { sender: 'sender', text: '不同產期的蓮藕，口感有差，七月份開始，蓮藕就比較適合拿來煮湯' }
        ],
        friends: [
          { name: '小番茄攤販', image: 'https://i.imgur.com/8o3Ey8P.png' },
          { name: '龍鬚菜攤販', image: 'https://i.imgur.com/iGc4hIe.png' },
          { name: '鳳梨攤販', image: 'https://i.imgur.com/WaYNgB2.png' }
        ]
      },'evening-vendor4': {
        name: '鳳梨攤販',
        product: '木瓜、鳳梨(以水果類為主)',
        price: '',
        time: '每天下午 16:30 ~18:00',
        location: '民雄166縣道',
        image: 'https://i.imgur.com/WaYNgB2.png',
        chat: [
          { sender: 'receiver', text: '叔叔好，這些水果都是自己種的嗎?' },
          { sender: 'sender', text: '鳳梨跟木瓜是自己種的!' },
          { sender: 'receiver', text: '喔!那叔叔是在地人嗎!' },
          { sender: 'sender', text: '是呀!你有什麼問題儘管問我!' },
          { sender: 'receiver', text: '哈哈哈好~那這些鳳梨是什麼品種的呀?' },
          { sender: 'sender', text: '這個就是民雄最盛產的金鑽鳳梨!' },
          { sender: 'sender', text: '酸酸甜甜的~在這麼熱的天氣最適合吃了!' },
          { sender: 'receiver', text: '那鳳梨適合用來做料理嗎?'},
          { sender: 'sender', text: '當然可以囉!鳳梨常常被拿來做點綴使用，可以為料理帶來一些獨特的風味' }
        ],
        friends: [
          { name: '小番茄攤販', image: 'https://i.imgur.com/8o3Ey8P.png' },
          { name: '龍鬚菜攤販', image: 'https://i.imgur.com/iGc4hIe.png' },
          { name: '蓮藕攤販', image: 'https://i.imgur.com/BRuXNsz.png' }
        ]
      }
    };

    buttonsMorning.forEach(button => {
      button.addEventListener('click', function() {
        const info = vendorData[this.dataset.info];
        document.getElementById('vendor-name').innerText = info.name;
        document.getElementById('vendor-product').innerText = info.product;
        document.getElementById('vendor-price').innerText = info.price;
        document.getElementById('vendor-time').innerText = info.time;
        document.getElementById('vendor-location').innerText = info.location;
        document.getElementById('vendor-image').src = info.image;

        // 清空并更新聊天室
        const chatContainer = document.getElementById('chat-container-morning');
        chatContainer.innerHTML = '';
        info.chat.forEach(message => {
          const messageElement = document.createElement('div');
          messageElement.className = `chat-message ${message.sender}`;
          messageElement.innerHTML = `<div class="chat-bubble">${message.text}</div>`;
          chatContainer.appendChild(messageElement);
        });

        // 清空并更新共同好友
        const friendsList = document.getElementById('friends-list-morning');
        friendsList.innerHTML = '';
        info.friends.forEach(friend => {
          const friendItem = document.createElement('li');
          friendItem.className = 'friend-item';
          friendItem.innerHTML = `<img src="${friend.image}" alt="好友頭像"><span>${friend.name}</span>`;
          friendsList.appendChild(friendItem);
        });

        modalMorning.style.display = 'block';
      });
    });

    buttonsEvening.forEach(button => {
    button.addEventListener('click', function() {
        const info = vendorData[this.dataset.info];
        if (!info) {
            console.error('未找到相應資料:', this.dataset.info);
            return;
        }
        // 更新模態框中的內容
        document.getElementById('vendor-name-evening').innerText = info.name;
        document.getElementById('vendor-product-evening').innerText = info.product;
        document.getElementById('vendor-price-evening').innerText = info.price;
        document.getElementById('vendor-time-evening').innerText = info.time;
        document.getElementById('vendor-location-evening').innerText = info.location;
        document.getElementById('vendor-image-evening').src = info.image;

        // 清空並更新聊天室
        const chatContainer = document.getElementById('chat-container-evening');
        chatContainer.innerHTML = '';
        info.chat.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${message.sender}`;
            messageElement.innerHTML = `<div class="chat-bubble">${message.text}</div>`;
            chatContainer.appendChild(messageElement);
        });

        // 清空並更新共同好友
        const friendsList = document.getElementById('friends-list-evening');
        friendsList.innerHTML = '';
        info.friends.forEach(friend => {
            const friendItem = document.createElement('li');
            friendItem.className = 'friend-item';
            friendItem.innerHTML = `<img src="${friend.image}" alt="好友頭像"><span>${friend.name}</span>`;
            friendsList.appendChild(friendItem);
        });

        // 顯示晚市模態框
        modalEvening.style.display = 'block';
    });
});


    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        modalMorning.style.display = 'none';
        modalEvening.style.display = 'none';
      });
    });

    window.onclick = function(event) {
      if (event.target === modalMorning || event.target === modalEvening) {
        modalMorning.style.display = 'none';
        modalEvening.style.display = 'none';
      }
    };

// 假設你有三個按鈕
const buttons = document.querySelectorAll('.road-element');
const dynamicMessage = document.getElementById('dynamic-message');

// 為每個按鈕添加點擊事件
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const vendorInfo = this.dataset.info; // 根據按鈕獲取資料
    switch (vendorInfo) {
      case 'morning-vendor1':
        dynamicMessage.textContent = '好~謝謝婆婆';
        break;
      case 'morning-vendor2':
        dynamicMessage.textContent = '了解！那我再看看!謝謝阿姨~';
        break;
      case 'morning-vendor3':
        dynamicMessage.textContent = '那我買三顆芭樂，謝謝阿姨!';
        break;
      // 可以添加更多的 case 以處理不同的攤販
      default:
        dynamicMessage.textContent = '這是默認消息';
    }
  });
});