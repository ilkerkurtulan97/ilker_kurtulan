#1-)Bir dosyayı okumak için readFile fonksiyonunu çalıştırdım fakat bir durumda okuma işlemine gerek kalmadı bu yüzden işlemi iptal etmek istiyorum. Programın devamında dosya okuma işlemini nasıl iptal edebilirim?

##-AbortSignal.abort() methodunu kullanabiliriz.



#2-)readFile fonksiyonu dosyayı bütün halinde okuyup memory’ye alır. Programın daha az memory kullanmasını sağlamak için alternatif olarak neler kullanılabilir?

##createReadStream() methodunu kullanabiliriz.
https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/

```javascript
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  var filename = __dirname+req.url;

  //Kullanım için bu satırda dosyamızın pathini vermemiz yeterli
  var readStream = fs.createReadStream(filename);

  //Bu blok sağlıklı bir okuma akışı olana kadar bekleyecek
  readStream.on('open', function () {

    readStream.pipe(res);
  });


  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(8080);
```

