# 🖼️ Imgur Clone Interface (imurgvs)

Bu proje, canlı yayında "Learn in Public" (Açıkta Öğrenme) mantığıyla geliştirilmiş Imgur tarzı bir ön yüz (front-end) arayüz kopyalama çalışmasıdır.

Karmaşık CSS Flexbox yapıları, menü hizalamaları ve Imgur'un ana sayfasında yer alan özel boyutlu etiket kartları kurgulanmıştır.

---

## 🤝 Geliştirme Süreci & İş Bölümü

Bu proje insan ve yapay zeka (Atlas / Gemini) ortaklığıyla geliştirilmiştir:

* 📄 **HTML (index.html) — Kerem:** Sayfanın tüm temel iskeleti, semantik etiketleri (`<header>`, `<main>`, `<nav>`, `<details>`), menü içerikleri ve kart yapıları tamamen tarafımdan yazılmıştır.
* 🎨 **CSS (style.css) — Kerem & Atlas:** Temel stiller ve renk seçimleri tarafımdan yapılmış; Header Flexbox hizalaması, orta arama çubuğu esnemesi ve özel etiket kartlarının yatay dizilimi (`flex` oranları) yapay zeka desteğiyle çözülmüştür.

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Semantik etiketler ve `<details>` / `<summary>` yapısı
* **CSS3:** Flexbox düzeni, `:nth-child` seçicileri, CSS esnetme oranları (`flex: 1` / `flex: 2.2`)

---

## 🎯 Kazanımlar & Öğrenilenler

* Flexbox ile `space-between`, `flex: 1` ve `gap` kullanarak dinamik Header kurgulama
* Ekran kaydırılması (scroll) olmadan kartları tek satıra oranlı şekilde sığdırma
* `:nth-child()` kullanarak ilk iki kartı diğerlerinin iki katı genişliğe getirme
