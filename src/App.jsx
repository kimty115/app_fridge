import { useState } from 'react';
import { ChefHat, Search, Plus, X, Utensils, CalendarDays, Pencil, Check, Sparkles, RefreshCw } from 'lucide-react';

const StrawberryIcon = ({ size = 48, color = "#ff99a8", opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" opacity={opacity}>
    {/* Body: Cute fat heart-like shape */}
    <path d="M12 21.5c-4.5-3.5-8-8-8-12.5 0-2.5 1.5-4.5 4.5-4.5 1.5 0 2.5 1 3.5 2 1-1 2-2 3.5-2 3 0 4.5 2 4.5 4.5 0 4.5-3.5 9-8 12.5z" />
    {/* Leaves */}
    <path d="M12 5.5c-1-1.5-3-2-5-1.5 1.5 1 2 2.5 2 3.5 0-1.5 1.5-2 3-1 1.5-1 3-.5 3 1 0-1 .5-2.5 2-3.5-2-.5-4 0-5 1.5z" fill="#9bd9a2" />
    {/* Seeds */}
    <circle cx="9" cy="10" r="0.9" fill="#d87a8b" />
    <circle cx="15" cy="10" r="0.9" fill="#d87a8b" />
    <circle cx="12" cy="13" r="0.9" fill="#d87a8b" />
    <circle cx="8" cy="14" r="0.9" fill="#d87a8b" />
    <circle cx="16" cy="14" r="0.9" fill="#d87a8b" />
    <circle cx="12" cy="17" r="0.9" fill="#d87a8b" />
  </svg>
);

const IceCreamIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M7 14L11.5 22C11.8 22.5 12.2 22.5 12.5 22L17 14" fill="#fcdbb3" />
    <path d="M6 14C5 12 5 9 12 9C19 9 19 12 18 14Z" fill="#ffb3c6" />
    <circle cx="12" cy="8" r="4" fill="#ffb3c6" />
    <circle cx="9" cy="10" r="3" fill="#ffb3c6" />
    <circle cx="15" cy="10" r="3" fill="#ffb3c6" />
  </svg>
);

const MilkIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 8H18V20C18 21 17 22 16 22H8C7 22 6 21 6 20V8Z" fill="#fff" stroke="#9bbced" strokeWidth="2" />
    <path d="M6 8L10 3H14L18 8" fill="#9bbced" />
    <rect x="9" y="12" width="6" height="6" rx="1" fill="#9bbced" />
  </svg>
);

const AppleIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21.5C7.5 21.5 4.5 18 4.5 13C4.5 9 7.5 7 12 7C16.5 7 19.5 9 19.5 13C19.5 18 16.5 21.5 12 21.5Z" fill="#ffb3c6" />
    <path d="M12 7C12 7 11 3 13 2C13.5 1.5 15 2 15 2C15 2 14 5 12 7Z" fill="#bde4c7" />
  </svg>
);

const CarrotIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M16 8L13 22C12.5 23 11.5 23 11 22L8 8" fill="#ffc8a2" />
    <path d="M12 8C15 8 17 6 17 6C17 6 15 4 12 4C9 4 7 6 7 6C7 6 9 8 12 8Z" fill="#bde4c7" />
    <path d="M12 4L11 2M12 4L13 2M12 4L15 3M12 4L9 3" stroke="#bde4c7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const mockIngredients = {
  fridge: [
    { id: 1, name: '사과', expiryDate: '2026-07-28' },
    { id: 2, name: '우유', expiryDate: '2026-07-27' },
    { id: 3, name: '계란', expiryDate: '2026-08-10' },
    { id: 4, name: '양배추', expiryDate: '2026-07-30' }
  ],
  freezer: [
    { id: 5, name: '만두', expiryDate: '2026-12-01' },
    { id: 6, name: '아이스크림', expiryDate: '2027-01-01' },
    { id: 7, name: '냉동 삼겹살', expiryDate: '2026-07-28' }
  ]
};

const allPossibleRecipes = [
  { 
    title: '사과 계란 샐러드', 
    desc: '마요네즈 없이 그릭요거트로 가볍게!', 
    time: '12분 30초',
    mainIngredients: ['사과', '계란'],
    steps: [
      '계란을 끓는 물에 정확히 10분간 삶아 완숙으로 만듭니다.', 
      '사과 반 개를 먹기 좋은 크기(약 1cm)로 깍둑썰기 합니다.', 
      '그릭요거트 2큰술, 레몬즙 1큰술, 올리브오일 1큰술을 섞어 소스를 만듭니다.',
      '으깬 계란과 사과를 볼에 담고 소스와 함께 1분간 가볍게 버무립니다.'
    ]
  },
  { 
    title: '돼지고기 양배추 볶음', 
    desc: '아삭함을 살린 든든한 밥반찬', 
    time: '8분 45초',
    mainIngredients: ['양배추', '돼지고기', '삼겹살'],
    steps: [
      '양배추를 채 썰고, 돼지고기 150g을 큼직하게 썰어 둡니다.', 
      '팬에 기름을 두르고 센 불에서 돼지고기를 3분 30초 동안 볶습니다.', 
      '고기 겉면이 노릇해지면 양배추를 넣고 2분 동안 숨이 죽지 않게 볶습니다.',
      '굴소스 1큰술, 간장 1큰술을 넣고 45초 동안 재빨리 섞어 불을 끕니다.'
    ]
  },
  { 
    title: '사골 만둣국', 
    desc: '시판 육수와 냉동 만두의 꿀조합', 
    time: '7분 20초',
    mainIngredients: ['만두', '계란'],
    steps: [
      '냄비에 시판 사골 육수 500ml를 붓고 강불에서 3분간 팔팔 끓입니다.', 
      '냉동 만두 5개를 넣고 뚜껑을 덮어 3분간 더 끓여줍니다.', 
      '만두가 떠오르면 중불로 낮추고 계란 1개를 풀어 둥글게 둘러 넣습니다.',
      '젓지 않고 20초간 그대로 두어 계란을 몽글몽글하게 익혀 완성합니다.'
    ]
  },
  {
    title: '양배추 계란 샌드위치',
    desc: '길거리 토스트 스타일의 든든한 한끼',
    time: '10분 00초',
    mainIngredients: ['양배추', '계란'],
    steps: [
      '양배추를 얇게 채썰고 계란 2개를 풀어 소금 간을 한 뒤 잘 섞어줍니다.',
      '팬에 버터를 두르고 양배추 계란물을 식빵 크기로 네모낳게 부칩니다.',
      '식빵을 바삭하게 굽고 그 위에 부친 계란을 올립니다.',
      '설탕과 케첩을 듬뿍 뿌려 완성합니다.'
    ]
  },
  {
    title: '우유 아이스크림 쉐이크',
    desc: '집에서 만드는 초간단 디저트',
    time: '3분 00초',
    mainIngredients: ['우유', '아이스크림'],
    steps: [
      '믹서기에 우유 200ml와 바닐라 아이스크림 2스쿱을 넣습니다.',
      '얼음 3~4알을 넣고 30초간 곱게 갈아줍니다.',
      '예쁜 컵에 담고 기호에 따라 시럽이나 과일을 얹습니다.'
    ]
  },
  {
    title: '폭탄 계란찜',
    desc: '부드럽고 빵빵하게 부풀어 오르는 식당 스타일',
    time: '15분 00초',
    mainIngredients: ['계란'],
    steps: [
      '계란 4개를 풀고 물 반 컵과 소금, 후추로 간을 맞춥니다.',
      '뚝배기에 계란물을 붓고 약불에서 천천히 저어가며 익힙니다.',
      '몽글몽글해지면 뚜껑(밥그릇)을 덮고 약불에서 3분간 더 익힙니다.'
    ]
  },
  {
    title: '바삭바삭 눈꽃 군만두',
    desc: '밑은 바삭, 위는 촉촉한 일본식 교자 굽기',
    time: '12분 00초',
    mainIngredients: ['만두'],
    steps: [
      '팬에 기름을 두르고 냉동 만두를 간격을 두어 올립니다.',
      '밑면이 노릇해지면 물 반 컵에 밀가루 1스푼을 섞은 전분물을 붓습니다.',
      '뚜껑을 덮고 물기가 사라질 때까지 찌듯이 굽다가 뚜껑을 엽니다.'
    ]
  },
  {
    title: '아이스크림 구운 사과',
    desc: '따뜻한 사과와 차가운 아이스크림의 환상 조화',
    time: '15분 00초',
    mainIngredients: ['사과', '아이스크림'],
    steps: [
      '사과를 가로로 반 자르고 씨 부분을 파냅니다.',
      '버터 1조각과 설탕, 시나몬 가루를 사과 위에 듬뿍 올립니다.',
      '에어프라이어 180도에서 10분간 구운 뒤, 아이스크림을 올려 완성합니다.'
    ]
  }
];

const mockWeeklyPlan = [
  { day: '월', meal: '돼지고기 볶음밥' },
  { day: '화', meal: '만둣국' },
  { day: '수', meal: '사과 샐러드 & 토스트' },
  { day: '목', meal: '계란말이 정식' },
  { day: '금', meal: '양배추 덮밥' },
  { day: '토', meal: '냉파게티 (남은 재료)' },
  { day: '일', meal: '외식 / 자유식' },
];

function App() {
  const [ingredients, setIngredients] = useState(mockIngredients);
  const [activeModal, setActiveModal] = useState(null); // 'fridge', 'freezer', 'mealPlanner', null
  const [openingDoor, setOpeningDoor] = useState(null); // tracks which door is animating open
  const [searchQuery, setSearchQuery] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [newExpiry, setNewExpiry] = useState('');
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  
  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editExpiry, setEditExpiry] = useState('');

  const getDDay = (dateString) => {
    if (!dateString) return null;
    const expiry = new Date(dateString);
    const today = new Date();
    today.setHours(0,0,0,0);
    expiry.setHours(0,0,0,0);
    const diffTime = expiry - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleRecommend = () => {
    const availableItems = [...ingredients.fridge, ...ingredients.freezer].map(i => i.name.toLowerCase());
    
    // Filter recipes that have at least one matching ingredient based on current fridge contents
    const possible = allPossibleRecipes.filter(r => 
      r.mainIngredients.some(mi => availableItems.some(item => item.includes(mi)))
    );
    
    // Fallback to all recipes if no match
    const pool = possible.length > 0 ? possible : allPossibleRecipes;
    
    // Shuffle and pick up to 3
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const newRecommendations = shuffled.slice(0, 3);
    
    // Overwrite the recommendations to reflect current fridge state
    setRecommendedRecipes(newRecommendations);
    setExpandedRecipe(null); // Reset expanded state to keep UI clean
  };

  const handleRemoveRecommendation = (recipeTitle) => {
    setRecommendedRecipes(prev => prev.filter(r => r.title !== recipeTitle));
  };

  const openModal = (type) => {
    // Only open if no door is currently opening
    if (!openingDoor && !activeModal) {
      if (type === 'fridge' || type === 'freezer') {
        setOpeningDoor(type);
        setTimeout(() => {
          setActiveModal(type);
        }, 400); // 400ms delay to let the door CSS animation play
      } else {
        setActiveModal(type);
      }
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setOpeningDoor(null); // Close the door visually too
    setSearchQuery('');
    setNewIngredient('');
    setNewExpiry('');
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (!newIngredient.trim()) return;
    
    const newItem = {
      id: Date.now(),
      name: newIngredient,
      expiryDate: newExpiry || null
    };

    setIngredients({
      ...ingredients,
      [activeModal]: [...ingredients[activeModal], newItem]
    });
    setNewIngredient('');
    setNewExpiry('');
  };

  const handleDeleteIngredient = (id) => {
    setIngredients(prev => ({
      ...prev,
      [activeModal]: prev[activeModal].filter(item => item.id !== id)
    }));
  };

  const handleEditStart = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditExpiry(item.expiryDate || '');
  };

  const handleEditSave = () => {
    if (!editName.trim()) return;
    setIngredients(prev => ({
      ...prev,
      [activeModal]: prev[activeModal].map(item => 
        item.id === editingId ? { ...item, name: editName, expiryDate: editExpiry || null } : item
      )
    }));
    setEditingId(null);
  };

  const filteredIngredients = activeModal && (activeModal === 'fridge' || activeModal === 'freezer') 
    ? ingredients[activeModal].filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="app-container">
      <div className="header">
        <h1>Smart Fridge</h1>
        <p>우리집 냉장고를 스마트하게 관리하세요</p>
      </div>

      <div className="fridge-container">
        {/* Realistic Inner Fridge visible when door opens */}
        <div className={`fridge-inner ${openingDoor ? 'visible' : ''}`}>
          {/* Freezer Section */}
          <div className="inner-section freezer-inner">
            <div className="shelf">
               <IceCreamIcon size={45} />
            </div>
          </div>
          {/* Divider between freezer and fridge */}
          <div className="inner-divider"></div>
          {/* Fridge Section */}
          <div className="inner-section fridge-main-inner">
            <div className="shelf">
               <MilkIcon size={45} />
               <AppleIcon size={45} />
            </div>
            {/* Crisper Drawer */}
            <div className="crisper-drawer">
               <CarrotIcon size={45} />
               <AppleIcon size={45} />
            </div>
          </div>
        </div>

        <div 
          className={`fridge-door freezer ${openingDoor === 'freezer' ? 'open' : ''}`} 
          onClick={() => openModal('freezer')}
          title="냉동실 열기"
        >
        </div>
        <div 
          className={`fridge-door fridge-main ${openingDoor === 'fridge' ? 'open' : ''}`} 
          onClick={() => openModal('fridge')}
          title="냉장실 열기"
        >
          <span className="door-label"><StrawberryIcon size={48} color="#ff99a8" opacity={0.9} /></span>
        </div>
      </div>

      <button className="fab" onClick={() => openModal('mealPlanner')} title="식단 짜기">
        <ChefHat size={28} />
      </button>

      {/* Ingredient Manager Modal */}
      {(activeModal === 'fridge' || activeModal === 'freezer') && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            <h2 className="modal-header-title">
              {activeModal === 'fridge' ? '냉장실' : '냉동실'} 속 재료들
            </h2>
            
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                className="input-field" 
                placeholder="식재료 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <form className="add-form" onSubmit={handleAddIngredient}>
              <input 
                type="text" 
                className="input-field" 
                placeholder="새로운 식재료 추가..."
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              <input 
                type="date" 
                className="input-field date-input" 
                value={newExpiry}
                onChange={(e) => setNewExpiry(e.target.value)}
                title="유통기한/구매일자"
              />
              <button type="submit" className="btn btn-icon"><Plus size={20} /></button>
            </form>

            {/* Alert Box for expiring items */}
            {activeModal && (['fridge', 'freezer'].includes(activeModal)) && (() => {
              const expiringItems = ingredients[activeModal].filter(item => {
                const d = getDDay(item.expiryDate);
                return d !== null && d <= 3;
              });
              if (expiringItems.length > 0) {
                return (
                  <div className="urgent-alert">
                    <span className="urgent-alert-title">🚨 빠른 소비 필요!</span>
                    <span className="urgent-alert-desc">유통기한 3일 내 재료가 {expiringItems.length}개 있어요.</span>
                  </div>
                );
              }
              return null;
            })()}

            <div className="ingredients-grid">
              {filteredIngredients.length > 0 ? (
                filteredIngredients.map(item => {
                  const dDay = getDDay(item.expiryDate);
                  const isUrgent = dDay !== null && dDay <= 3;
                  
                  if (editingId === item.id) {
                    return (
                      <div key={item.id} className="ingredient-card edit-mode">
                        <input 
                          type="text" 
                          className="input-field edit-input" 
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                        <input 
                          type="date" 
                          className="input-field edit-input" 
                          value={editExpiry}
                          onChange={(e) => setEditExpiry(e.target.value)}
                        />
                        <div className="edit-actions">
                          <button className="action-btn save-btn" onClick={handleEditSave} title="저장"><Check size={14} /></button>
                          <button className="action-btn cancel-btn" onClick={() => setEditingId(null)} title="취소"><X size={14} /></button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={item.id} className={`ingredient-card ${isUrgent ? 'urgent-card' : ''}`}>
                      <span className="ingredient-name">{item.name}</span>
                      {item.expiryDate && (
                        <span className="ingredient-date">{item.expiryDate.slice(5)}</span>
                      )}
                      {isUrgent && (
                        <span className="urgent-badge">
                          {dDay < 0 ? '기한 지남!' : (dDay === 0 ? 'D-Day' : `D-${dDay}`)}
                        </span>
                      )}
                      <div className="card-actions">
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => handleEditStart(item)}
                          title="수정"
                        >
                          <Pencil size={14} />
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteIngredient(item.id)}
                          title="삭제"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-muted)' }}>
                  재료가 없습니다.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Meal Planner Modal */}
      {activeModal === 'mealPlanner' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content meal-planner-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            
            <div className="header" style={{ marginBottom: '1.5rem', animation: 'none' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>스마트 식단 도우미</h2>
              <p style={{ fontSize: '0.9rem' }}>냉장고 속 재료로 무엇을 만들 수 있을까요?</p>
            </div>

            <div className="recommendation-section" style={{ background: '#f4fbff', padding: '1.2rem', borderRadius: '15px', marginBottom: '2rem', border: '1px solid #bde0fe' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="section-title" style={{ margin: 0 }}><Sparkles size={20} color="#ff99a8" /> 냉장고 파먹기 추천!</h3>
                <button 
                  className="btn" 
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} 
                  onClick={handleRecommend}
                >
                  <RefreshCw size={14} /> 다른 추천 받기
                </button>
              </div>

              {!recommendedRecipes || recommendedRecipes.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: '#888899', background: 'white', borderRadius: '10px' }}>
                  <p style={{ marginBottom: '1rem' }}>현재 냉장고에 있는 재료를 활용해서<br/>맛있는 요리를 추천해 드립니다.</p>
                  <button className="btn btn-primary" onClick={handleRecommend}>
                    지금 추천 받기
                  </button>
                </div>
              ) : (
                <div className="recommendations-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {recommendedRecipes.map((rec, idx) => (
                    <div key={idx} className="recipe-card" style={{ position: 'relative', border: '2px solid #9bbced', boxShadow: '0 5px 15px rgba(155, 188, 237, 0.2)' }}>
                      <button 
                        className="recipe-delete-btn"
                        onClick={() => handleRemoveRecommendation(rec.title)}
                        title="추천 지우기"
                      >
                        <X size={18} />
                      </button>
                      <h4>{rec.title}</h4>
                      <p>{rec.desc}</p>
                      <div className="recipe-tags">
                        <span className="tag">{rec.time} 소요</span>
                        <span className="tag" style={{ background: '#e8f0fe', color: '#1a56db' }}>활용 재료: {rec.mainIngredients.join(', ')}</span>
                        <span 
                          className="tag click-tag" 
                          onClick={() => setExpandedRecipe(expandedRecipe === rec.title ? null : rec.title)}
                        >
                          레시피 {expandedRecipe === rec.title ? '닫기 🔼' : '보기 🔽'}
                        </span>
                      </div>
                      {expandedRecipe === rec.title && (
                        <div className="recipe-steps">
                          <ol>
                            {rec.steps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="weekly-plan-section">
              <h3 className="section-title"><CalendarDays size={24} /> 이번 주 식단표</h3>
              <div className="weekly-grid">
                {mockWeeklyPlan.map((plan, idx) => (
                  <div key={idx} className="day-card">
                    <div className="day-name">{plan.day}요일</div>
                    <div className="day-meal">{plan.meal}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
