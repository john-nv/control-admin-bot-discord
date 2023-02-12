# Bot Admin Discord
Bot admin được xây dựng dựa trên các nhu cầu quan trọng của các admin server discord

Đa số các bot có sẵn trước đó đã làm tốt công việc hiện tại của mình, vào thời điểm giữa năm 2021 rất hot các game cờ bạc trong cộng đồng Discord Việt Nam nhưng thị trường ít ai công khai source còn các bot có hiện hành lại không có, dựa vào nhu cầu của cá nhân tôi và các admin khác và cùng nhau xây dựng ý tưởng và tôi thay mặt các admin tạo ra bot game cho mọi người giải trí.

Có thể bot ở version discord hiện tại đã lỗi thời vì đã chuyển sang các cấu trúc nhắc lệnh thay vì thủ công như ngày trước, nhưng đó là kỉ niệm của chúng tôi của những người xa lạ khắp việt nam và không quên các bạn ngoại quốc cùng nhau tụ họp tán gẫu, tâm sự và nâng cao tiếng anh giao tiếp.

**Chúng tôi không xây dựng bot mang tính chất làm tiền hoặc vi phạm pháp luật. Mọi cá cược đều mang tính chất giải trí, không sử dụng tiền mặt hoặc các loại tiền tệ có thể sử dụng ở đời thật và không thể quy đổi thành tiền mặt hoặc tiền tệ, tiền ảo**

## Xây dựng trên các nền thư viện chính
- Discord.js **v12.5.3**
- Node.js

## Sử dụng

Lệnh quản lý

| banMember     | kickMember  | thongbao    | thongbaobg  | say         |
| ------------- |-------------|-------------|-------------|-------------|


Lệnh game

| baucua        | taixiu      | xinloc      | random      | math (tính tiền|
| ------------- |-------------|-------------|-------------|----------------|

Lệnh công khai

| avatar        | ping        | info-user   | createBot   | help        |
| ------------- |-------------|-------------|-------------|-------------|

lệnh **help**

<img src="https://i.imgur.com/5DODsRl.png">

### Game

Dưới đây còn sót lại những chiếc ảnh đã cũ cho những trò chơi

Bầu cua và tài xỉu chỉ khác nhau về hình ảnh

Ở chế độ chờ trước khi ra kết quả

<img src="https://cdn.discordapp.com/emojis/1014831508822962196.gif?size=96&quality=lossless">
<img src="https://cdn.discordapp.com/emojis/1014831508822962196.gif?size=96&quality=lossless">
<img src="https://cdn.discordapp.com/emojis/1014831508822962196.gif?size=96&quality=lossless">

Ra kết quả

<img src="https://i.imgur.com/ijGf0iX.png">

Xin lộc 

<img src="https://i.imgur.com/Eyzcr1I.png">

### Cấu hình sử dụng

file : /config.json
```
{
    "token": "",
    "prefix": "",
    "CHANNELID_CHECK_MANAGE": "",
    "idAdmin": "",
    "idBaucua": "",
    "imglogoBackround": "",
    "imgLogo": ""
}
```
* token : token bot
* prefix : câu lệnh
* CHANNELID_CHECK_MANAGE : kiểm ra ban kick
* idAdmin : id role admin 
* idBaucua : id người lắc bầu cua, hoặc bạn có thể comment line ở thư mục ```commands/gameMessage/baucua.js``` để tất cả mọi người đều sử dụng
* imglogoBackround : ảnh lớn của server
* imgLogo : ảnh nhỏ của server

Hãy tham gia kho lưu trữ chính của tôi để có thêm các source game khác [tại đây](https://discord.gg/JBt2mTPQa)

Chúc các bạn thành công.
