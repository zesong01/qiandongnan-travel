import { useState } from "react";

const days = [
  {
    day: 1,
    date: "5月2日（周六）下午",
    title: "重庆 → 遵义",
    tagline: "半日赶路，夜宿红城",
    drive: "约 280km｜3小时",
    route: "重庆 → G75兰海高速 → 遵义",
    color: "#8b2500",
    timeline: [
      { time: "15:00", icon: "🚗", title: "重庆出发", desc: "午饭后从容出发。走G75兰海高速直奔遵义方向，路况好且距离短。五一第二天出城方向车流已明显回落。全程约280km，中间无需停靠。" },
      { time: "16:30", icon: "⛽", title: "途中tips", desc: "五一期间高速全免费（5.1-5.5），无需纠结ETC。如果油不够就在綦江或桐梓服务区加油，出发前加满最省事。一家人车上聊聊天、听听歌，很快就到。" },
      { time: "18:00", icon: "🏨", title: "抵达遵义·入住", desc: "导航至遵义市中心红花岗区，住在老城/丁字口附近，步行可达遵义会议旧址片区。经济型150-250元/晚，舒适型300-400元。" },
      { time: "18:30", icon: "🍲", title: "遵义晚餐", desc: "必吃遵义羊肉粉（老字号「刘二妈」）或豆花面。也可以去捞沙巷夜市——恋爱豆腐果、洋芋粑粑、丝娃娃，全家人先预热一下贵州味道。" },
      { time: "20:00", icon: "🌃", title: "散步（可选）", desc: "不累的话沿凤凰山广场走一圈，遵义会议旧址晚上外墙有灯光，拍照好看。早点回酒店休息，明天要早起赶路。" },
    ],
    tips: [
      "🆓 5.1-5.5高速全免费，今天0过路费",
      "油费：约160元（280km × 8L/100km × 7.6元/L）",
      "遵义住宿五一涨价，提前在美团/携程订好",
      "车上备好零食、水、充电线，明天长途用得上",
    ],
    stay: "遵义市区酒店（200-350元/晚）",
  },
  {
    day: 2,
    date: "5月3日（周日）",
    title: "遵义 → 肇兴侗寨",
    tagline: "穿越黔中，夜入侗乡",
    drive: "约 480km｜5.5小时",
    route: "遵义 → 贵阳绕城 → G76厦蓉高速 → 三穗 → 黎平 → 肇兴",
    color: "#2d5016",
    timeline: [
      { time: "07:00", icon: "🚗", title: "遵义出发", desc: "吃完酒店早餐7点出发。遵义到贵阳1.5h，走贵阳绕城不进城，转G76厦蓉高速往三穗/黎平方向。" },
      { time: "09:30", icon: "☕", title: "凯里服务区", desc: "开了2.5小时，停下来休息活动。过了凯里车流骤降，进入黔东南山区，风景开始惊艳。" },
      { time: "10:30", icon: "🏔️", title: "三穗→黎平", desc: "弯道增多但沿途梯田和侗寨开始出现，云雾在山间飘荡。这段路本身就是风景线。" },
      { time: "12:30", icon: "🏘️", title: "抵达肇兴侗寨", desc: "导航到「肇兴侗寨售票处」。停车场30元/天。坐景区公交进寨（10元/人）。门票80元/人，在线提前买。联系客栈老板来寨门口接。" },
      { time: "13:00", icon: "🍲", title: "入住+午餐", desc: "推荐临河客栈（古歌秘境/水岸肇兴/那时花开等）。放下行李在河边吃午饭：酸汤鱼、腌肉、糯米饭。侗族酸汤用米汤发酵，比苗族的更柔和。" },
      { time: "14:30", icon: "🎨", title: "寨内漫游", desc: "逛五座鼓楼（仁义礼智信），每座风格不同。体验侗族蜡染/扎染（30-50元/人）。参观侗族文化展示中心（免费）。肇兴比西江苗寨安静很多，慢慢走。" },
      { time: "16:30", icon: "🎵", title: "侗族大歌", desc: "每天有定时民俗演出（含在门票内）。世界非遗——多声部无指挥无伴奏合唱，声音浑厚又空灵。一家人一起听非常震撼。" },
      { time: "18:30", icon: "🍖", title: "晚餐", desc: "找临河露台餐厅，点侗家糯米酿鱼和烤香猪。配自酿米酒（微甜不上头），看对岸鼓楼亮灯。" },
      { time: "20:00", icon: "🌙", title: "夜游+篝火", desc: "鼓楼灯光亮起后沿河散步拍倒影。五一期间晚上可能有篝火晚会，跟当地人跳「多耶舞」（手拉手围圈踏步），全家老少都能参与。" },
    ],
    tips: [
      "🆓 高速全程免费",
      "门票：80元/人 × 3 = 240元，网上提前买",
      "客栈一定提前订！五一肇兴很抢手",
      "下载离线地图，黎平段信号弱",
      "五月黔东南多雨，随身带折叠伞",
    ],
    stay: "肇兴侗寨客栈（300-500元/晚）",
  },
  {
    day: 3,
    date: "5月4日（周一）",
    title: "堂安侗寨 → 镇远古城",
    tagline: "梯田徒步，夜泊古镇",
    drive: "约 230km｜3.5小时",
    route: "肇兴 → 堂安（班车/徒步）→ 肇兴 → 黎平 → 三穗 → 镇远",
    color: "#1a3a4a",
    timeline: [
      { time: "06:30", icon: "🌄", title: "晨雾拍照", desc: "肇兴清晨薄雾缭绕，鼓楼若隐若现，是全天最美光线。在寨门和风雨桥附近拍几张。" },
      { time: "07:30", icon: "🥣", title: "早餐", desc: "侗家油茶泡饭——用茶叶和糯米爆花一起熬煮，咸香开胃。或者来碗粉。" },
      { time: "08:00", icon: "🚐", title: "班车上堂安", desc: "一家三口坐班车上山（20元/人含返程，约20分钟）。到堂安后慢慢玩。体力好可以从堂安走回肇兴（下坡为主，7km约2h），否则坐班车返回。" },
      { time: "08:30", icon: "🏔️", title: "堂安侗寨", desc: "700年历史的「没有围墙的博物馆」。比肇兴更安静更原始：瓢井汲水、禾仓晒谷、鼓楼戏台。在观景台俯瞰堂安梯田——5月灌水期水田如镜，映着蓝天和吊脚楼。游客极少，五一也不挤。" },
      { time: "10:00", icon: "🔽", title: "下山", desc: "坐班车或徒步回肇兴（带好门票，回寨检票）。徒步经过厦格侗寨时找「梯田景观步道」——一片隐藏的绝美梯田，几乎无人。" },
      { time: "11:00", icon: "🍜", title: "午餐+告别肇兴", desc: "回寨吃午饭：侗族烤鱼或腊肉炒笋。饭后在没走过的巷子逛最后一圈，买点侗布手工艺品。" },
      { time: "13:00", icon: "🚗", title: "出发→镇远", desc: "取车离开肇兴，走黎平→三穗→镇远方向，约230km，3-3.5h。沿途山景秀丽，一家人车上回味侗寨体验。" },
      { time: "16:30", icon: "🏯", title: "抵达镇远古城", desc: "2000年历史古城，舞阳河S形穿城，两岸明清建筑依山而建。停车后入住河边客栈，推荐新大桥至祝圣桥一带，推窗看河景。" },
      { time: "17:00", icon: "🚶", title: "古城漫步", desc: "沿河步道散步：祝圣桥（标志性古桥）→四方井巷（古巷幽深）→河边码头。镇远游客比凤凰古城少很多，巷子里安静有韵味。" },
      { time: "18:30", icon: "🍲", title: "镇远晚餐", desc: "镇远酸汤鱼是一绝。再来油炸粑配甜酒。在河边吃饭看对岸灯火亮起，非常惬意。" },
      { time: "20:00", icon: "✨", title: "舞阳河夜景", desc: "镇远夜景是贵州最美之一：明清古建在灯光下倒映在河面，两岸璀璨。全家一起沿河散步或在桥上坐着发呆，为旅程画上完美句号。" },
    ],
    tips: [
      "🆓 高速依然免费",
      "堂安班车：20元/人含返程（3人=60元）",
      "堂安有台阶坡路，穿防滑运动鞋",
      "镇远古城不要门票，个别小景点另收费",
      "镇远住宿选临河房间，夜景加分很多",
    ],
    stay: "镇远古城河景客栈（250-450元/晚）",
  },
  {
    day: 4,
    date: "5月5日（周二）",
    title: "镇远半日游 → 回家",
    tagline: "古城晨光，满载归途",
    drive: "约 450km｜5小时",
    route: "镇远 → G56杭瑞高速 → 遵义 → G75兰海高速 → 重庆",
    color: "#3d1a4a",
    timeline: [
      { time: "07:00", icon: "🌅", title: "清晨镇远", desc: "早起沿河走走。清晨的镇远没有游客、薄雾笼罩河面，烟火气最浓——早餐店冒热气，老人在河边晨练。全天最佳拍照时刻。" },
      { time: "07:30", icon: "🥣", title: "早餐", desc: "巷子里找一家粉面店，来碗镇远米豆腐或素粉，配辣椒蘸水。简单地道暖胃。" },
      { time: "08:00", icon: "🏯", title: "青龙洞古建筑群", desc: "镇远最值得看的景点——贴在悬崖上的古建筑群，融合儒释道三教。登顶后俯瞰舞阳河S弯全景，这是网上镇远最经典的角度。门票约60元/人，游览1-1.5h。" },
      { time: "09:30", icon: "🛍️", title: "古巷采买", desc: "下山后在古巷逛最后一圈。镇远手工银饰、苗绣比景区便宜。买苗族酸汤包、辣椒面带回重庆当手信。" },
      { time: "10:30", icon: "🚗", title: "出发回家", desc: "退房取车。镇远→G56杭瑞高速→遵义→G75→重庆，约450km。5月5日返程高峰已过（5月4日才是最堵的），今天路上应该顺畅。" },
      { time: "12:30", icon: "🍜", title: "遵义午餐", desc: "中午恰好到遵义附近，可以下高速再吃一顿贵州味道：遵义虾子羊肉粉，辣而不燥。吃饱了一鼓作气回重庆。赶时间就在服务区解决。" },
      { time: "13:30", icon: "🛣️", title: "遵义→重庆", desc: "最后2.5小时。⚠️ 重要：必须在5月5日24:00前驶下重庆高速收费站，否则全程按正常收费！下午回去时间很充裕，不用赶。" },
      { time: "16:00", icon: "🏠", title: "到家！", desc: "回到重庆，四天三晚的黔东南之旅圆满结束！泡杯茶、整理照片，回味侗乡和古城的点点滴滴。" },
    ],
    tips: [
      "⚠️ 5月5日24:00前必须下高速，否则全程收费",
      "青龙洞有陡峭台阶，注意家人安全",
      "返程油箱在镇远或遵义加满",
      "🆓 高速依然免费，全程省约600-700元",
    ],
    stay: "回到温暖的家 🏠",
  },
];

const budget = [
  { item: "油费（全程约1400km）", cost: "约 850元", note: "92#，8L/100km，7.6元/L" },
  { item: "高速通行费", cost: "0元 🆓", note: "五一免费（5.1-5.5）" },
  { item: "住宿 3晚", cost: "约 750-1300元", note: "遵义+肇兴+镇远" },
  { item: "景区门票（×3人）", cost: "约 480-540元", note: "肇兴240+堂安60+青龙洞180" },
  { item: "餐饮 4天（3人）", cost: "约 800-1200元", note: "每餐60-100/人" },
  { item: "停车+景交", cost: "约 130元", note: "肇兴停车30+景交30+镇远等" },
  { item: "蜡染等体验", cost: "约 100-200元", note: "可选项目" },
];

export default function TravelPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [showBudget, setShowBudget] = useState(false);
  const d = days[activeDay];
  const totalMin = 3110;
  const totalMax = 4420;

  return (
    <div style={{
      fontFamily: "'Noto Serif SC', 'Source Han Serif SC', Georgia, serif",
      background: "#f5f0e8",
      minHeight: "100vh",
      color: "#2a2420",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 40%, #1a3a4a 100%)",
        color: "#f5f0e8", padding: "28px 20px 24px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 21px)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: 5, opacity: 0.6, marginBottom: 6, fontFamily: "sans-serif" }}>2026 · 五一 · 一家三口自驾</div>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px", letterSpacing: 2 }}>黔东南侗乡秘境之旅</h1>
          <div style={{ fontSize: 13, opacity: 0.75 }}>肇兴侗寨 · 堂安梯田 · 镇远古城</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 12, fontSize: 11, opacity: 0.6, fontFamily: "sans-serif", flexWrap: "wrap" }}>
            <span>📅 5.2下午 → 5.5傍晚</span>
            <span>🚗 约1400km</span>
            <span>🆓 高速全免</span>
          </div>
        </div>
      </div>

      <div style={{
        display: "flex", background: "#ebe5d9",
        borderBottom: "1px solid #d4cabb", position: "sticky", top: 0, zIndex: 10,
      }}>
        {days.map((day, i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={{
            flex: 1, padding: "12px 4px 10px", border: "none",
            background: activeDay === i ? "#f5f0e8" : "transparent",
            borderBottom: activeDay === i ? `3px solid ${day.color}` : "3px solid transparent",
            cursor: "pointer", fontFamily: "inherit",
          }}>
            <div style={{ fontSize: 10, opacity: 0.5, fontFamily: "sans-serif" }}>Day {day.day}</div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: activeDay === i ? day.color : "#8a8070", marginTop: 2 }}>
              {day.date.split("（")[0]}
            </div>
          </button>
        ))}
      </div>

      <div style={{ padding: "16px 14px 20px" }}>
        <div style={{
          background: `linear-gradient(135deg, ${d.color}, ${d.color}dd)`,
          color: "#f5f0e8", borderRadius: 12, padding: "16px 16px 14px", marginBottom: 16,
        }}>
          <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 3, fontFamily: "sans-serif" }}>{d.date}</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 3px", letterSpacing: 1 }}>{d.title}</h2>
          <div style={{ fontSize: 13, opacity: 0.8, fontStyle: "italic" }}>{d.tagline}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 10, fontSize: 11, opacity: 0.65, fontFamily: "sans-serif", flexWrap: "wrap" }}>
            <span>🚗 {d.drive}</span>
            <span>🛏️ {d.stay}</span>
          </div>
          <div style={{ fontSize: 10, opacity: 0.55, marginTop: 6, fontFamily: "sans-serif" }}>{d.route}</div>
        </div>

        {d.timeline.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 2 }}>
            <div style={{ width: 44, flexShrink: 0, textAlign: "right", paddingTop: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: d.color, fontFamily: "monospace" }}>{item.time}</div>
            </div>
            <div style={{ width: 26, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%", background: "#fff",
                border: `2px solid ${d.color}30`, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 13, flexShrink: 0,
              }}>{item.icon}</div>
              {i < d.timeline.length - 1 && <div style={{ width: 2, flex: 1, background: `${d.color}18`, minHeight: 16 }} />}
            </div>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 10, padding: "10px 12px", marginBottom: 8,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #ebe5d9",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontSize: 12, lineHeight: 1.7, color: "#5a5040", fontFamily: "'Noto Sans SC', sans-serif" }}>{item.desc}</div>
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 16, background: `${d.color}08`,
          border: `1px solid ${d.color}18`, borderRadius: 10, padding: "12px 14px",
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: d.color, marginBottom: 6 }}>⚡ 当日提示</div>
          {d.tips.map((tip, i) => (
            <div key={i} style={{
              fontSize: 11.5, lineHeight: 1.6, color: "#5a5040",
              fontFamily: "'Noto Sans SC', sans-serif", paddingLeft: 12, position: "relative", marginBottom: 2,
            }}>
              <span style={{ position: "absolute", left: 0, color: d.color, opacity: 0.4 }}>·</span>
              {tip}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 14px 16px" }}>
        <button onClick={() => setShowBudget(!showBudget)} style={{
          width: "100%", padding: "14px 16px", background: "#fff",
          border: "1px solid #ebe5d9", borderRadius: showBudget ? "12px 12px 0 0" : 12,
          cursor: "pointer", fontFamily: "inherit", textAlign: "left",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>💰 全程费用明细</span>
            <span style={{ fontSize: 12, color: "#2d5016", fontWeight: 600 }}>{showBudget ? "收起 ▲" : "展开 ▼"}</span>
          </div>
          {!showBudget && (
            <div style={{ fontSize: 12, color: "#8a8070", marginTop: 4, fontFamily: "sans-serif" }}>
              三人合计约 {totalMin}-{totalMax}元 · 人均 {Math.round(totalMin/3)}-{Math.round(totalMax/3)}元
            </div>
          )}
        </button>
        {showBudget && (
          <div style={{
            background: "#fff", borderRadius: "0 0 12px 12px",
            padding: "4px 16px 14px", border: "1px solid #ebe5d9", borderTop: "1px dashed #ebe5d9",
          }}>
            {budget.map((b, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                padding: "8px 0", borderBottom: i < budget.length - 1 ? "1px solid #f0ebe0" : "none",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontFamily: "'Noto Sans SC', sans-serif" }}>{b.item}</div>
                  <div style={{ fontSize: 10, color: "#aaa", fontFamily: "sans-serif", marginTop: 1 }}>{b.note}</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: b.cost.includes("🆓") ? "#2d5016" : "#2a2420", fontFamily: "monospace", whiteSpace: "nowrap", marginLeft: 12 }}>{b.cost}</span>
              </div>
            ))}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              padding: "12px 0 4px", marginTop: 8, borderTop: "2px solid #2d5016",
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>三人合计</div>
                <div style={{ fontSize: 11, color: "#8a8070", fontFamily: "sans-serif" }}>人均 {Math.round(totalMin/3)}-{Math.round(totalMax/3)} 元</div>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#2d5016" }}>{totalMin}-{totalMax} 元</span>
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "0 14px 32px" }}>
        <details style={{ background: "#fff", borderRadius: 12, border: "1px solid #ebe5d9" }}>
          <summary style={{ padding: "12px 16px", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
            🎒 装备清单 + 注意事项
          </summary>
          <div style={{ padding: "0 16px 14px", fontSize: 12, lineHeight: 2, color: "#5a5040", fontFamily: "'Noto Sans SC', sans-serif" }}>
            <b>衣物：</b>薄外套（山区早晚凉）、防晒衣、运动鞋（堂安徒步）<br/>
            <b>车载：</b>离线地图📍、行车记录仪、车载充电器、零食饮水<br/>
            <b>随身：</b>充电宝、折叠伞🌧️、防晒霜+墨镜、驱蚊液<br/>
            <b>药品：</b>晕车药、肠胃药、创可贴<br/>
            <b>证件：</b>身份证（必带）、驾驶证、行驶证<br/><br/>
            <b style={{color:"#8b2500"}}>⚠️ 关键提醒：</b><br/>
            · 5月5日24:00前必须驶离高速收费站<br/>
            · 黔东南5月多雨，山路减速开雾灯<br/>
            · 侗寨吊脚楼木质结构，严禁明火<br/>
            · 拍人先打招呼，尊重当地居民
          </div>
        </details>
      </div>
    </div>
  );
}
