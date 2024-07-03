//scraper by Alan dika saputra
const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("fetch");
const fs = require("fs");
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
      return res;
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
module.exports = { ytid, ytsid, ytal, gethd, getdj, ytshort, yt }