//scraper by Alan dika saputra/Ivan Theo
//scraper ini ori buatanku kecuali igdl jangan hapus credit
const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("fetch");
const fs = require("fs");
const _Ref = 'https://en.y2mate.is';
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function token() {
    try {
        let res = await axios.get('https://en.y2mate.is/v15/', {
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                accept: "*/*",
                cookie: "_ga=GA1.1.1245736961.1707988712; _ga_QS73XC9RW5=GS1.1.1709904732.4.1.1709904928.60.0.0; _clck=3bl7xm|2|fkf|0|1546; _clsk=1s79nhg|1711498708834|5|1|j.clarity.ms/collect",
            },
        });
        const html = res.data;
        const $ = cheerio.load(html);
        const csrfToken = $('meta[name="csrf-token"]').attr('content');
        return csrfToken;
    } catch (error) {
        console.error("Error getting token:", error);
    }
}

async function ytdl(link, token) {
    try {
        const yt = await axios.post("https://lb1.2convert.me/analyze", 
            new URLSearchParams({
                url: link,
            }), {
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "*/*",
                    "X-Csrf-Token": token,
                    "Referer": _Ref, 
                    "Origin": _Ref,
                },
            });
let vidurl = [];
let vidnc = [];

console.log(yt.data.formats.audio)
yt.data.formats.video.forEach(format => {
    if (format.quality && format.url) {
        if (format.needConvert) {
            vidnc.push({ quality: format.quality, url: format.url });
        } else {
            vidurl.push({ quality: format.quality, url: format.url });
        }
    }
});
let aud = []
let audv = []
yt.data.formats.audio.forEach(format => {
    if (format.quality && format.url) {
        if (format.needConvert) {
            aud.push({ quality: format.quality, url: format.url });
        } else {
            audv.push({ quality: format.quality, url: format.url });
        }
    }
});
const info = yt.data.formats
const json = {
    title: info.title,
    thumbnail: info.thumbnail,
    durasi: info.duration,
    video: { 
        converted: {
            result: vidurl
        },
        noconvert: {
            result: vidnc
        }
    },
    audio: {
    	noconver: {audv},
    neconver: {aud}
    	}
};

return json;
    } catch (error) {
        console.error("Error analyzing YouTube link:", error);
    }
}
async function task(hash, token) {

	const doo = await axios.post("https://srvcdn10.2convert.me/api/json",
new URLSearchParams({
                hash: hash,
            }),
                      {      headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "*/*",
                    "X-Csrf-Token": token,
                    "Referer": _Ref, 
                    "Origin": _Ref,
                },
            });
            await sleep(4000)
            console.log(doo.data.taskId)
            return doo.data.taskId
	}
	async function convert(hash, token) {
	const doo = await axios.post("https://srvcdn10.2convert.me/api/json/task",
new URLSearchParams({
                taskId: await task(hash, token),
            }),
                      {      headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "*/*",
                    "X-Csrf-Token": token,
                    "Referer": _Ref, 
                    "Origin": _Ref,
                },
            });
            await sleep(15000)
            console.log(doo.data.download)         
            return doo.data.download;
	}

	
async function tik(videoUrl) {
    try {
        const response = await axios.post(
            "https://ssstik.io/abc?url=dl",
            new URLSearchParams({
                id: videoUrl,
                locale: "id",
                tt: "",
            }),
            {
                headers: {
                    accept: "*/*",
                    cookie: "_ga=GA1.1.815869132.1711492866; _gads=ID=2639a4b48e231c4e:T=1711492867:RT=1711493478:S=ALNI_MYzLDVnHyeG4dcG0fxIf0WoqqW-pg; _gpi=UID=00000d67ba24c753:T=1711492867:RT=1711493478:S=ALNI_Mal2tZl8NQJHAqD9dBpBaA0-VsHmw; _eoi=ID=ad8a9099246bbb0b:T=1711492867:RT=1711493478:S=AA-AfjaqM4Lk2qK_xObwiyxUHLVC; _ga_ZSF3D6YSLC=GS1.1.1698108684.1.1.1698108695.0.0.0; _ga=GS1.1.1711492866.1.1.1711493492.0.0.0",
                    "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36",
                },
            }
        );

        const html = response.data;
        const $ = cheerio.load(html);

        // Ekstrak URL gambar
        const imageURL = $("img.result_author").attr("src");

        // Ekstrak href untuk video tanpa tanda air
        const videoLink = $("a.download_link.without_watermark").attr("href");

        // Ekstrak href untuk download file MP3
        const mp3Link = $("a.download_link.music").attr("href");

        const result = {
            img: imageURL,
            download: {
           video: videoLink,
            audio: mp3Link
            }
        };

        console.log(result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}
const igdl = async (urlku) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "https://snapinsta.tv/core/ajax.php",
        new URLSearchParams({
          url: urlku,
          host: "instagram",
        }),
        {
          headers: {
            accept: "*/*",
            cookie:
              "PHPSESSID=a457b241510ae4498043da9e765de30c; _gid=GA1.2.1007159517.1698108684; _gat_gtag_UA_209171683_55=1; _no_tracky_101422226=1; _ga_N43B1RQRDX=GS1.1.1698108684.1.1.1698108695.0.0.0; _ga=GA1.1.1466088105.1698108684",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
          },
        }
      );

      const $ = cheerio.load(response.data);
      const mediaURL = $(
        "div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom"
      )
        .map((_, el) => {
          const link = "https://snapinsta.tv/" + $(el).find("div.col-md-8.mx-auto > a").attr("href");
          const imgSrc = $(el).find("div.col-md-8.mx-auto > div.image > img").attr("src");
          return { link, imgSrc };
        })
        .get();

      const res = {
        status: 200,
        url: mediaURL[0].link,
        image: mediaURL[0].imgSrc,
      };

      console.log(res);
      resolve(res);
    } catch (e) {
      console.log(e);
      reject({
        status: 400,
        message: "error",
      });
    }
  });
};
async function ytid(link) {
  const regex = /[?&]v=([^?&]+)/;
  const match = link.match(regex);
  return match ? match[1] : null;
}
async function ytsid(url) {
  const regex = /\/shorts\/([^\/]+)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1];
  } else {
    console.error('Unable to extract shorts ID.');
    return null;
  }
}


async function ytal(link) {
  try {
    const response = await fetch("https://yt5s.best/mates/en/analyze/ajax?retry=undefined&platform=youtube", {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(Object.entries({
        url: link,
        ajax: 1,
        lang: 'en'
      }))
    });

    const { result } = await response.json();
    const $ = cheerio.load(result);
console.log(result)
    const title = $('#video_title').text().trim() || 'Title not found';
    const thumbnailUrl = $('.img-thumbnail').attr('src');
    
    const videoUrls = {};
    $('td:contains("(.mp4)")').each((index, element) => {
        const quality = $(element).text().trim();
        const videoUrl = $(element).parent().find('a.btn-success').attr('href');
        if (quality.includes("360p")) {
          videoUrls['360p'] = videoUrl;
        } else if (quality.includes("720p")) {
          videoUrls['720p'] = videoUrl;
        }
    });
    const resultObject = {
      title: title,
      thumbnailUrl: thumbnailUrl,
      videoUrls: videoUrls,
    };
    console.log(resultObject)
    return resultObject
  } catch (error) {
    console.error("Error:", error.message);
  }
}
async function gethd(link) {
	try {
		let idyt = await ytid(link)
		let u = await ytal(link)
		let title = u.title
const dl = await fetch(`https://yt5s.best/mates/en/convert?id=${idyt}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'x-note': '1080p',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(Object.entries({
        platform: 'youtube',
        url: `https://www.youtube.com/watch?v=${idyt}`,
        title: title,  
        id: ytid,
        ext: 'mp4',
        note: '1080p',
        format: '137',
      }))
    });
    let hasil = await dl.json()
    let hasill = {
    	"1080p": hasil.downloadUrlX
    }
    console.log(hasill)
    return hasill
		} catch (err){
			console.error(err)
			}
	}
	async function getdj(link) {
	try {
		let idyt = await ytid(link)
		let u = await ytal(link)
		let title = u.title
		let form = ""
const dl = await fetch(`https://yt5s.best/mates/en/convert?id=${idyt}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'x-note': '128k',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(Object.entries({
        platform: 'youtube',
        url: `https://www.youtube.com/watch?v=${idyt}`,
        title: title,  // Replace with the actual title
        id: ytid,
        ext: 'mp3',
        note: '128k',
        format: form,
      }))
    });
    let hasil = await dl.json()
   let mp = {
   	"mp3": hasil.downloadUrlX
   	}
   
    console.log(mp)
    return mp
		} catch (err){
			console.error(err)
			}
	}
	async function ytshort(link) {
		let v = await ytal(link)
		let idyt = await ytsid(link)
		console.log(idyt)
		const title = v.title
		const dl = await fetch(`https://yt5s.best/mates/en/convert?id=${idyt}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'x-note': '360p',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(Object.entries({
        platform: 'youtube',
        url: `https://www.youtube.com/watch?v=${idyt}`,
        title: title,  
        id: ytid,
        ext: 'mp4',
        note: '360p',
        format: '18',
      }))
    });
    const hasil = await dl.json()
    const hasill = hasil.downloadUrlX
   
    return hasill
		}
	async function yt(link) {
		let v = await ytal(link)
	    let vv = await gethd(link)
	    let vvv = await getdj(link)
		let title = v.title
		let thumb = v.thumbnailUrl
		let urlv = v.videoUrls
		let s = urlv['360p']
		let ss = urlv['720p']
		let sss = vv["1080p"]
		let ssss = vvv['mp3']
		let final = {
			judul: title,
			thumbnail: thumb,
			download: {
				sd: s,
				hd: ss,
				hdr: sss,
				musik: ssss
				}
			}
			console.log(final)
			return final
		}
module.exports = { tik, token, ytdl, task, convert, igdl, ytid, ytsid, ytal, gethd, getdj, ytshort, yt }