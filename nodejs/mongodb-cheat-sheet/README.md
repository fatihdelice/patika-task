# MongoDB Cheat Sheet

### Tüm Veri Tabanını Göster

```shell
show dbs
```

### Mevcut Veri Tabanını Göster

```shell
db
```

### Veri Tabanı Oluştur veya Değiştir

```shell
use acme
```

### Mevcut Veri Tabanını Sil

```shell
db.dropDatabase()
```

### Yeni Tablo Oluştur

```shell
db.createCollection('posts')
```

### Veri Tabanındaki Tabloları Göster

```shell
show collections
```

### Veri Ekle

```shell
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

### Birden Fazla Veri Ekle

```shell
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

### Tüm Verileri Getir

```shell
db.posts.find()
```

### Tüm Verileri Düzenli Halde Getir

```shell
db.posts.find().pretty()
```

### Verileri Bul

```shell
db.posts.find({ category: 'News' })
```

### Verileri Sırala

```shell
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

### VErileri Say

```shell
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

### Verileri Sınırla

```shell
db.posts.find().limit(2).pretty()
```

### Chaining

```shell
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

### Foreach

```shell
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

### Bir Tane Veri Bul

```shell
db.posts.findOne({ category: 'News' })
```

### Belirli Alanları Bul

```shell
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

### Satırları Güncelle

```shell
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

### Belirli Alanı Güncelle

```shell
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

### Alanı Arttırma ($inc)

```shell
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

### Alanı Yeniden Adlandır

```shell
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

### Satırı Sil

```shell
db.posts.remove({ title: 'Post Four' })
```

### Alt Belgeler

```shell
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

### Dizideki Öğeye Göre Bul ($elemMatch)

```shell
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

### Index Ekle

```shell
db.posts.createIndex({ title: 'text' })
```

### Metin Ara

```shell
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

### Büyük veya Küçük

```shell
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```