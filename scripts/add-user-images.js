const fs = require('fs');
const path = require('path');
const https = require('https');

const OUTPUT_DIR = path.join(__dirname, '../public/images/google-maps');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');

const urls = [
  "https://lh3.googleusercontent.com/p/AF1QipNMm2oOXXB7xOrsW4eC53BkRMTPqZlTedQK0Y1i",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTyQ9C4xC6DjYwU4CNGExPZLmoZCofiOWAhld8llbtHz4ajbpgfw3JQzTR_gHg4SLLHAMETrbBNpM2XFuy2lCjRL4wlBcR5SpYyxYB38ZU5Kn-EqIgt1Mtvi0aUjcRp3PfVMAfOBxXcxeI",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGIsITMeGWNydZvrS9eaKEXrcKEcXdNHkPDcNsTPe4lZosJOg4vbdwXOX_Aiiz7WMijEOcxZ8cU2VmZzsZFA4TfvJfjLGM2MNIk5O7uk1UDoyFVnhrcAsMx5o4hfjXGNq9JxAEPTA",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyBta042e-lO3SRISf8WGjCYCqVVebgZ2FrpDHQs5vUjaABlQgxC1pnk3Bs1AktVf45TwUe1_Sxgv5DxyBSx3AQizU0BmdjpYlPLgi155-wTmZgEZDqHOifOXxUDDa7OSIe4VZoQ",
  "https://lh3.googleusercontent.com/p/AF1QipPg_Pdz5B2Hvz_8APsJqdWNkXiMDZHO4powaELR",
  "https://lh3.googleusercontent.com/p/AF1QipMhV-sfYZL6Tqq23-Ws3PaoQojSkkO6Jb_nbB5D",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFqM1TC03F4-3LVr8GRVS5q4MrdUSdcSfwcmIXeJiFB8OEKVGyRa-UlG4xSJc1eeWqaF6RFmb8xs6MgnaPt9N73oMaAD4NGr9WdLS3SRXTJNN6HD17MZTTid67CjogP5xU_WtFYqg",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHFNfPVqaGwt6k85CMXXu6QPCfbieIEQELcsUtS8t6uMtn93jAnzvcAfw1Gew-GvrL0gYMboc9AiufJRlMUCnJUki7bi9UI9W3_RbAueOKaXl_whH6DDZEq0JgOkpVoAY8nPB_P",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHOEHvDvV-P4woWEV9oDZYt3QeQnE97ahbOwNKjPkUwzDDVgDyEgsNWdGESlunN2lnvsjFo7lJiS2GnIQ3FLMzVbr-wLrY780adKj7fzgXSblccXyf2Q1As5c4zLCUaZ2r34R4",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvcFK72yYcscthDVTOVHZ1HH8ly1dMH6U8c9lHYp-dqs0WeFSjMpwXDdZkveYBKwiXSSn3NtcjLAfev8kKRJiotAau5d2-Wz86jQDxW8jrm9mffFsllqFf_mlRSYVXFUwyDrBl",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFz6YPcwjyNJHpaNqg5Z283Ha0WH2rV8VAi786LcY6i9SXhjBwufJsZfN-9ylXELS8ZN9gGA1E27KBHbgchLidaoADayLUw4upqrvx6jh2OLRdQdt1vVZ1Ad4HK3DnZmjTTDBgn",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE11wcnMjFBUbFzqnZG_oyikwVXc7EnCyq0zlkF3FwH3BMRF1QeeZmGhe6YVHbK-aFhCqOp4stAqF2UMqp_ja_a_hRL5whznInNd4MdN8mzZvJ5r1UdIoPP_LpB4aba5GiYuI3efQ",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH8akA1SJIsBMhrhohervIC3OIIzM8-J0Z-v85WPegAF9SOB6HeUkuKsjZL-TTDFGGdeta8S5B_iMYSn4VjWXZLqWsyqRqAxTtEvz6DBtkYC8zv2RC6aLqYOcizuA-WznWHbJW9gA",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGTxec8NKCONNHfsF-tha1SbauvxNurYC0KmMy0herdF33eShp5w2jqaxaJsON3aHciCNKX6VWNZw46BKRBIx6dcaOru49-NmzjcWcPd7VpRapSkjmpklHL1oTIOD3ckz4yq2w",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFwh4McwfmhPrKbDntQt-GG0LsOI_uVuk11Zr73Ht7eScrlQRfVa3DA0TQYSIMJAK63E5Vfys9E42nYGXS-BDSOp_FLRds-li-LPxFuZvshb5_gGJcK_iLI44n_SyV-6al5nMHu",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFWrJR9rX8jm4uKnV8-xLyadi9C5xgcg_TUmNbW4tfVxhSCVnpOuO6oGxRlgPx9i2X5Ic9Prx1j61NRIX7l8e6qBx-8PpG26-C4HktQwOawXL_ROhuaFjKN8z2xhNwWO2heL1GyvQ",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGdRx6DHOQXh2PW3Eu-OfBXHHPDqqUKTT8fMn0m66Tu9EbBckTRmi_YEKULyir7Ges9aQRivazZ2EHfjBUaG73rj4FRtE11iSOkZYojIqnM2_oOEAsn0D2weC2Qn7SNaBA5CubV",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH1ncgMW02uPmH0KHf9ZuFmKcB_MyjPoha7kBzorzowTwFue0DkHsOQI15zDkyLSMuyJPTKCtKq8D5FEXVDWnU29ILAa1BuEKQYD7kVjQbUXs0NC2hhYMnGJ3zBh5382WqZ_oDq",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE-eBRbkkhWnvXfH3ax9iKmH7VAHcDgK9De3YrRQlKcFgGH8841dSbAx5FdR1SPUhPi0vocef6_UZr7BSLPRy6cM7b8C-a96TODTtaFgnLWrxKIU2VyZ25GAszdHY-hyV5Iwemkog"
];

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url + '=s1200', (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .on('finish', resolve);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const manifest = [];
  if (fs.existsSync(MANIFEST_PATH)) {
    manifest.push(...JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')));
  }

  for (let i = 0; i < urls.length; i++) {
    const filename = `user-added-${String(i + 1).padStart(3, '0')}.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);
    
    console.log(`📥 Downloading ${filename}...`);
    try {
      await downloadImage(urls[i], filepath);
      manifest.push({
        filename: `/images/google-maps/${filename}`,
        src: urls[i],
        index: i + 200,
        category: 'ambiance'
      });
    } catch (err) {
      console.error(`❌ Failed to download ${filename}:`, err.message);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`🎉 Done! Total manifest size: ${manifest.length}`);
}

run();
