
# **Hyper Frontend Developer Case - Recep Terzi**

Öncelikle geri dönüşünüz için teşekkür ederim. Bu projede tasarımsal değişiklikler yapmadım ve belirtilen case maddelerine odaklanarak geliştirme sağladım. Proje, Next.js ve pnpm kullanılarak geliştirilmiştir.

### **1. Aşama**

Projedeki tüm gereksinimleri yerine getirdim. API veri çekme işlemini `axios` ile gerçekleştirdim. State management için `Redux Toolkit` kullandım ve stil tasarımında `tailwindcss` tercih ettim.

Kod tekrarını minimize etmek amacıyla her bir bileşeni ayrı birer component olarak oluşturdum. Ürün detaylarını ekrana başarıyla bastırıp, kullanıcıların ürünleri sepete eklemelerine imkan tanıdım. Sepete eklenen ürünlerin sayısını, sepet ikonunda görsel olarak gösterilmesini sağladım.

### **2. Aşama**

Ürünlerin kategorilerinin filtrelenmesi için bir selectbox kullandım. Kategoriler, erkek ve kadın olarak ayrıldı. Teknoloji gibi diğer kategoriler de bulunuyordu ancak bu iki kategori ile başlanmasının yeterli olacağını düşündüm.

Lazy Loading işlemi için React'ın kendi içerisinde bulunan `Suspense` bileşenini kullandım. Ayrıca, sepet verilerini sayfa yenilemelerinde korumak amacıyla eklenen ürünleri `localStorage`'da saklayarak veri kaybını önledim.

Ekstra olarak, ödeme ekranına geçiş yaparak kullanıcıya kart bilgilerini `react-card-flip` ile animasyonlu bir şekilde gösterdim. Form validasyonu için projelerimde sıkça kullandığım `Zod` kütüphanesini tercih ettim. Kullanıcıya geri bildirim sağlamak için ise `react-toastify` kullanarak sepete ekleme işlemlerinde bildirimler ekledim.
