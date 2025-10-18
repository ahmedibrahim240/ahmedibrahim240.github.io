'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "350d714f255ffe4b4c0fd99950844fa4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "22de48e9a17a22ba9876060ad04eaf38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f76d2e825334a12e126a5ea029f144a",
".git/logs/refs/heads/main": "b7e70b3e9e6064461f95d0e24e3754a8",
".git/logs/refs/remotes/origin/main": "d62342d4e03c359774c288d37cb9f474",
".git/objects/0d/4f780365992b431af512562b4563ab270d5fb2": "68eefaa1d024025147bb8c43ccd58854",
".git/objects/11/ee3eb51fbbc591a0bf1dc9ef08f50713a4e5db": "e105757a67e7d5ff30659954d9ab3899",
".git/objects/15/3294f46988dd1675fe07685d1f156bf8f3b228": "48e8ab775329cef5dfe9ed17966281d4",
".git/objects/1a/3fa2be74e4067c2fd58a4ae3241d305ae0df80": "14663ee55ec554bd49e46c5cf85a6567",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/7a5faf7ec336ebf7682ec01d524f98f89b21f1": "4580db4105bcbafb6e3f54be30ce76a2",
".git/objects/1d/c2daccab5240cca602d7299cca46d5286f1d4c": "6b482d3fb32c0ea43be88fb87661193b",
".git/objects/1e/20a7c847dfb49b03a538c9e840854e35ded0fa": "9bc95f9d3b839f7a338e722e390254c2",
".git/objects/21/2dd508850df42ae6b4ae12b236fa6996b0ec93": "65c0f154bbdc0a99139804a28580213b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/f935ada9b601aaa12d86832eaac5c35844e9f1": "6c4743f0444603a75b9277330f84493d",
".git/objects/28/947666b1ca3a0ee03022ee3f37f647e3b0ab87": "b12889467d8ba07a9efa4e6dccdd37c9",
".git/objects/2c/70efaee262f1624a0c68d2190804c4b41fbada": "f83a3bc417be044e6bc944c1f6b1fac3",
".git/objects/31/d59c4d6d604562882ed7792a485d6ea3e46bb8": "53ddd1044b5ee9b68625d367857e309b",
".git/objects/32/0496d3cf870c9bbec472257767e51c680ebc96": "9d87579fbb8f692b65043e47455dce78",
".git/objects/32/fc9cbfcb5608e59a84f3677d856214997aafaa": "03e16787a8c4dc9064a9e416a3c9aab9",
".git/objects/33/466ac4bd945808537e2e3e94b28c3a15c7ad50": "1ae5ec6594fe0d1d8aa2c17e1ff72453",
".git/objects/34/d878a8061d991e1b48d65f14d88ba80b0d7897": "3f3b20301520edb3a0ce3694810d6cd9",
".git/objects/35/8de4209ed663fd039aa65e1b07e115f4eff05b": "3f5e8c66ae23cf429b52947ae09f6964",
".git/objects/36/3d6d0cd3fdadaee75a42a974c2f79089d8c99f": "018c6e1040c288c0dfb033d5d5e04698",
".git/objects/36/85c812e29e26a17223160a854908dafb67c2dc": "3d5bd07da70d87b6006cdb99bbfea953",
".git/objects/39/cf2e36f4fd27ddcb54a962e83402d9a4a2d10b": "19df724ef15dd9633c687e101203c46f",
".git/objects/3c/e236f5881d0484e316d25463f4fe55e3997ca2": "1bb5ddb6829bd61a1c41e5804639e0b8",
".git/objects/3e/48595dea331707c473397761d7f8f563310431": "d9d57aafb12fc57b9fce0b7385dfe7ca",
".git/objects/44/7f8c5350a74ffe73488a303dc5e6d896236a8d": "0f3658747838afcd31f3025c8d20a9f7",
".git/objects/48/41c58a5ddce6bc8eb8ef33246f45b1d54b45cc": "c7dd1f3bbfe1db4b0b9d88904c724796",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/c0b3069ea15c44d4a6431831123b92e040b4f2": "72dfce77cf39d4319518f7ed4c7c4f42",
".git/objects/50/2679b9de0b0be78d6fdb983fd825e669f8e7ed": "d131e7e898473dafeb508ecb74457652",
".git/objects/51/f03a1dbf43dab062479b36f8261d65e8985b39": "feb5fd2d1f7037d4f683cdbd0d61875f",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/13527f31b3d4d4cd33d8235235d32fab40551e": "093f0eca91212dbb86be06c7820272fa",
".git/objects/56/585e051c7cf85d4046f3089dd277e36cbd9cda": "4795d79ab32d2eb232b512b9662ed231",
".git/objects/56/7e57d6db1a426c8fdfccb31b03508570484dc1": "5114262afbdaa29f939351b32ec3927e",
".git/objects/59/6fa4456002f39974a182174ac38b91db398bef": "55f2822a40db552da1d5ab44db2c136c",
".git/objects/5d/35c240e3ffbe37ab31a8f1603562eb7b1fe4d7": "a7baf6e030ac4a5746c037aeb50a4f76",
".git/objects/5d/a2c7ebb3583ad696c9e6a25efa32ca3997d5ea": "c5426bfd600858cd8c094f7fcc892655",
".git/objects/61/ad9c1526ad9532d422f4ae96b17f0e5ec7242d": "a5e539aaffc3bbe9050412e293fcb6fb",
".git/objects/62/897ab699643c3bb04fa1025d4c04066322df6d": "be5a5aa5c7e5ade0c0f9b55454a591c9",
".git/objects/63/2be91294a0a0ca8f50d56c95285186b8208c0d": "bb9b0b857f82ed382c7c1bc533209daf",
".git/objects/64/6462667a266e82b12d950c6b4a9fd57f3ccb11": "2e33207c46e48dbbab7713c961613d5b",
".git/objects/68/a3b0e92974d46170dbb93c783f4f39286f103f": "3af3548b96c326cc611214094f3c31cb",
".git/objects/6a/ad184cb9befe89556b8c9cfbcf6e43627c03ed": "86c74e108c9a4a7245cf339cd0cf0e72",
".git/objects/6b/2344541d1d6feef8338e728fceca4857d4ec19": "6a85c41cb815c48938667075d439a9c5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/3a315f633962137567b72e9d2eb31ba9fabcdb": "62260b0d1afd6728541e4fc7e9158518",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/d06e10114434797e83d6b4d3691f65afeb370e": "fd76fdbcef18f3489e88ed74e12caa63",
".git/objects/7b/b51dbad7880d67881c027f35ff2b28e5c91048": "4fd808b71930760d0e365c203a076cd1",
".git/objects/7e/110b940f95265957f423d25fa0669bdf893084": "0c597911492274dbee2665824118eb90",
".git/objects/7e/88645382f0c72c8e91e7af1f69305f4ebf6b46": "0b42215840f6a9d17ed8d2a8e6ca6ae6",
".git/objects/7e/ebcb61c311bfeb457d8b079ff5f1598a16e25a": "30db2dc7ccf8bcd4f6dc4716f2b71dca",
".git/objects/81/b6ab48b7626bb96f034e1d98023eeb6c3b0cdf": "781684d8146133beb6b85bb8a9b86879",
".git/objects/83/d059577cf7ba39d3e2d135afbb0e2839a5d522": "1657cbc8cb159c7b96706d48945a8542",
".git/objects/83/db47b8313e44e6e3917a78525cdd679b7a460f": "6c4cb0e2f669468e037adddcb5ea441f",
".git/objects/86/2dcae7be4fd2c4fda1cae3869a278eed33518d": "33b2692e366638f60a7e023c8320048b",
".git/objects/87/45cb429c87c89c2619adda8a4fe64d35be9652": "9cac8ad3f1cdd05f29b1ee0285b53be8",
".git/objects/8a/b466787a3227a7dcc975c42dd9df190201384e": "6879449d9c9ebd8389604db0d2cc3148",
".git/objects/8b/dce9ea4c902099703f7db3a38b61cbd1eb5e47": "9451d3f7773bb5b2488d4fe2533126a5",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/8636ec457d4ca6b35259d0b0404028296a3616": "204b91907313b2ff5cbe7b170d256d47",
".git/objects/91/d8b6c00f102d3604158e601aa70ba463228031": "d01fed77fd17ad61e0a0e104ca9fef89",
".git/objects/96/d3316d48d3c18b21d4d9f4f3e8b9de66cb878b": "4e8ce999fec5410fe93c2f8b3b46eff9",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/46d9a1b42e2336b3e353f0d7c363703e4251f6": "702bf9f2c28b3f2c80cf6fe3bbd3c154",
".git/objects/9e/8de1f75e6b912acf82062a2c105ad4874ec787": "148081b40e7391ff2f3879995d360bcf",
".git/objects/9e/dd0c0862e7aa3e3a638b392685318cc8041798": "19efd2de7330280aec23855a92d524a7",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/9f/2caef9c6f79ed60c3b26167135c2cb6a5fb87c": "1d0aa998fdcf1ee20ba8f0987bd593dd",
".git/objects/a0/b1dc0a7c0cdb6959722c9a19e71f335f72016c": "227ae89c0405e9f48a597fed08a25f34",
".git/objects/a1/c541c1143a6c66b73d1a6d1d6ac2100208ba15": "60aca9e36992582fa76525cda37a4534",
".git/objects/a3/d7ba70a7ba9b344c2ab086f35792e77a64b3fa": "b115e9674e694ecfdb4567012fe0896a",
".git/objects/a8/cf84e82f382ea6dfcf804d379008097a686ac8": "1358470e65a4167f7f2f5867f72fd7ef",
".git/objects/aa/30a33ee543d6d180ab9adc75afc4ea65e6dba3": "c0868d031201ca8c143b1d9dcf247cc3",
".git/objects/ad/cbe831e9e95260d261ae7b9ae81f616c7513d7": "f47ab10345b32c9623cea1685f04ba91",
".git/objects/ae/845bd4741eb16c22a80e746a9237b0ca528624": "cd361e3f4574068dfb5ef2c8d10058b1",
".git/objects/b8/7c38c04095ad62c7efd6f34cab72f5b57eb7c1": "e2742c80b94477ea2811666b260ff5eb",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/8de88d634c9c0777fbbea706422acb88db7b32": "97dbe37f7bb23859c1dd216b29d1c8fc",
".git/objects/bb/c4e654ff5d176715203667e62aff69547b3ef2": "cf329c358a167ca2b2d897f0c31ddc65",
".git/objects/c0/11a8b21c77c3a7ff7065681e8465d1ddde2c56": "40a8cf02f88a848c4cd0087364172f3a",
".git/objects/c1/6b478cb72b332635adad54219c496b8dbc23a0": "84c2ce8c1596daf82019a83769e9c980",
".git/objects/c1/9df1d9c46fa06c800db4d8e483012767325c9e": "12d6b8d8d54b77f9b20d0d8db8b0090d",
".git/objects/c3/a6c03b958581e0a4fb5c13b04aa3abee617086": "609612cbe68caed6a7ccba5d03745a05",
".git/objects/c4/bd07a189c9592755de68454c8349321f8fd0f9": "2ad4c261ddccc13cbec98367510b12ba",
".git/objects/c5/6f2f3accbb1e0a98c0caef9a095b0281622c43": "18ed2e0035a474c7911ad20a2e25ee2a",
".git/objects/c6/d07503a4363f6dd4eca6208f8656872a52028e": "d1801507ec5e060e7ef125c3924c4051",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d1/1d32ad56e6efef1d58939ddc25ec1e9e1e67ef": "be39606bdeb3f6f1979b521d61d38e54",
".git/objects/d2/4e3c6b788985d8218788f0055489b470a52ea6": "9e2af078559ad517105cd9091c691a6c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0db35c69c394506976db9cb82ca9d018bbb9e5": "562258b349ffd635925c33b0c336bd00",
".git/objects/d8/100f29181274a4e1bfa6229abb4ba6b82ad347": "f791694f45aecc206ff16afa33d8c7a5",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/37aea1d3b55afb16a55838f020bcc04da8c43c": "fc06bda9e40b4ff6d31c56399f00bbf7",
".git/objects/dd/8d85d8bc845be6da4dc277b7fa0dfead6410b1": "4982b1b09fb07d32a228cb7784243fea",
".git/objects/df/0ccee71ad28e2ca883e3144d469b900d94c9e9": "9940e235b4323037eb0d759b00c9d18b",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/87d607b2eed3dbef9bf23aaac03d4bd0017386": "06ce88196de7ac9057cb68c0cd622644",
".git/objects/e4/d6d345cc8d558147eae0ceac3a77121f098a33": "1b572652096b585be073826cb5a31027",
".git/objects/e7/644996eac0bf0b1b9bd6487be8ff1cf0878aa3": "6fb80ab30839a6c80f1ecf1b9d3e2c51",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ee/4e7226266f6d04dd64f414ba88c6cdcb4edaf5": "d1ea9d738d0eb674c0b977875b9a98c5",
".git/objects/f1/149117149eb637f2455b822af28bd577c11ab3": "dea3be2481fd079a30b98498dbec0172",
".git/objects/f1/5305e88de9d0ce68f7f9aab153f32b9aa7a3bb": "dc590eda7b1999518ab8695e3591ecd1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c13ed37fbe088651ea3afe05b3a484d23cf343": "3b0cf0b97b72477d42f5c8da7383f888",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ca1d16900f56b5a1dd1a279986f71b69a29d19": "ead878bb39688489e60d54ad0269f57c",
".git/objects/f9/6de8cd02b513d868e6dd3d1fb9c114965b5c95": "a38065285716625312f4170e2043108c",
".git/objects/f9/90537918c2829e6781c33da7d25396d503ac89": "81dadf4b41ed245c8030b4d19592b52c",
".git/objects/f9/e1a35fc84b6e60ac66593f4c81c2d3f1a222ce": "18c42021a92f2edfc3eb49b65e72bca8",
".git/objects/fa/9cb528ce3caaed2d04b3f371ffe4f3803fb6a0": "f1a5ffef993fce1634a101d3c212f905",
".git/objects/fe/97b0ce0ab9d126232b7954bdd3789783f2cc1c": "82b63558d35df8c448ee6e6a8c663325",
".git/objects/ff/998dd7ea706587772cf92e17ff8eebc2ef5c71": "0e4879bd6acc9419cb337e3b9dc5a3aa",
".git/refs/heads/main": "b4d7a01b803f0f5ac0f921888eff8f75",
".git/refs/remotes/origin/main": "b4d7a01b803f0f5ac0f921888eff8f75",
"assets/AssetManifest.bin": "5f1fb393d24719b32d8abd886b285c95",
"assets/AssetManifest.bin.json": "b885eb72a4d01766fad815753acdae51",
"assets/AssetManifest.json": "44d7051da010ccb2d20309e1ca18965f",
"assets/assets/elite/1.svg": "bc1c4a8dc93bc196d5dbd88577e309f6",
"assets/assets/elite/2.svg": "dbf7834734b8a0d9f966e1ac551f6dee",
"assets/assets/elite/3.svg": "9927dd28a025f6834e1876f48e76a9b4",
"assets/assets/elite/4.svg": "e8bc1043b6c881a21728f7345a0c2656",
"assets/assets/elite/5.svg": "f88546515201d3c4f1e5b5bebfaaaa75",
"assets/assets/elite/6.svg": "32b71c13d3b8c68344233c665f6f3967",
"assets/assets/elite/7.svg": "5beca81b18c9bc2d0311b08d33bec019",
"assets/assets/ikhar/1.png": "f07d79e6cef0c62bc5a238a5a2d200e3",
"assets/assets/ikhar/2.png": "45d5c60c18c791691d7928b8ed2340e3",
"assets/assets/ikhar/3.png": "ac5616b0072e473465b6e545c143b37c",
"assets/assets/ikhar/4.png": "16a43178631c820d4bd1e32efa7a963e",
"assets/assets/ikhar/5.png": "9ab04edc3b77495cfb6e676f56f7e93b",
"assets/assets/ikhar/6.png": "9b2786ce5f3630ede2ed17e0f9f42f3b",
"assets/assets/ikhar/7.png": "b9041b1de380dd43394e3a211b4e5a10",
"assets/assets/ikhar/8.png": "d4b75b2e3e8eb322e7ea6fb32814d205",
"assets/assets/lite/1.svg": "b5f3dffab656e3b456cd6a9b6ff6e0f2",
"assets/assets/lite/2.svg": "f17a320c3dce16847ebccf263fc190b2",
"assets/assets/lite/3.svg": "85f3efd521172cadfef0ac11a7a78efb",
"assets/assets/lite/4.svg": "3bdc9e0464650a187d77afe67c947bfe",
"assets/assets/lite/5.svg": "0e69db6b217cd28e8a85b0cf2e51b650",
"assets/assets/lite/6.svg": "7e33b9e406c56b992f82ff3df6d67f9f",
"assets/assets/lite/7.svg": "1709f0dfb87da5cc1c8bbab6ee5837d5",
"assets/assets/lite/8.svg": "433423eb832ef34c675be8cea547d922",
"assets/assets/me.jpeg": "1058263c7ea4ba95fbfaeaff8cd39967",
"assets/assets/mylogo.png": "458767145c07971245b8717c1d9fe4bb",
"assets/assets/tayaar/1.svg": "e148f476e2d41cfddca7cee35d621934",
"assets/assets/tayaar/2.svg": "0bdd550336f66e22743db620e63da7ff",
"assets/assets/tayaar/3.svg": "382221625b10c5c62f0400284db7159e",
"assets/assets/tayaar/4.svg": "9d92fead8540b2df92621097953584d2",
"assets/assets/tayaar/5.svg": "12d641539cc921fb20c9d91c2732db36",
"assets/assets/tayaar/6.svg": "620dcf730d2a9574b7895f75548699f5",
"assets/assets/tayaar/7.svg": "8e012fd4b85478004cce06f131fc1cc7",
"assets/assets/trygc/1.svg": "9f42779097d632aa7bba05430ac1a1f6",
"assets/assets/trygc/2.svg": "0679bfd6b30812732fc5be95f5fad375",
"assets/assets/trygc/3.svg": "8e443858f2f96062ace302f6fa0c8df9",
"assets/assets/trygc/4.svg": "7b6049fc829538a387d9ce8b15b5b864",
"assets/assets/trygc/5.svg": "459a52cae621d8206a8b131f6620fdb3",
"assets/assets/trygc/6.svg": "0e5bd67fe21e9720fd93ba0c668fc119",
"assets/assets/trygc/7.svg": "6ed04d81d8fa20ed090a2d1bf9dc9595",
"assets/assets/trygc/8.svg": "d6f0879b5eb0cb878828f1770f8f5c56",
"assets/assets/trygc/9.svg": "04badfc93852ab180d7060353bbfb429",
"assets/assets/tyasart_clinet/1.png": "0136f13445c23fa229bde670ecf93677",
"assets/assets/tyasart_clinet/2.png": "2ee1544f0b0daace16cee26fa5b078dd",
"assets/assets/tyasart_clinet/3.png": "dabb850fcd720d19e3bc9675eafcc3b0",
"assets/assets/tyasart_clinet/4.svg": "3d24e99576fd091b47908eece820fe78",
"assets/assets/tyasart_clinet/5.svg": "0f8b76e14e0cf979dbe32d210159ae25",
"assets/assets/tyasart_clinet/6.svg": "db24def74d60d03ce91c9f192c4b846d",
"assets/assets/tyasart_clinet/7.svg": "a06ffa663aa87dcc2ae7404551c9c25c",
"assets/assets/tyasart_clinet/8.png": "55d2ec66dc086e9af6d8ecdf478d0f9d",
"assets/assets/tyasart_clinet/9.png": "966a5cfe798d351ea845c3c08fc80176",
"assets/assets/tyasart_com/1.png": "64d5c8d66b3d41a457ed67f7dccc5380",
"assets/assets/tyasart_com/2.png": "79b6aff526007f07c9263031fa643df8",
"assets/assets/tyasart_com/3.png": "e6c3c75da66c532b75347f29a26a92cc",
"assets/assets/tyasart_com/4.svg": "7a946dbd620c8a6c241d7fbd82bf2304",
"assets/assets/tyasart_com/5.svg": "16bffb1f47c637169b78cb5114708778",
"assets/assets/tyasart_com/6.svg": "8614732deba8cdba32d8d8c68caabd40",
"assets/assets/tyasart_com/7.svg": "3cec180222d20a34b144ae943318db39",
"assets/assets/tyasart_com/8.svg": "e21a8be4cd7ee0ea491b17c7dce5de8a",
"assets/assets/tyasart_com/9.svg": "075c15b801ebd92e87e3c82d016d8c5c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dc875c5d7dbe7af5e81a162b62a9609d",
"assets/NOTICES": "812ec0110a9251c074158ed1516cc83c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2d3c7e919bcb605287fb2bda01315090",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0b8b7b1b69d1fc34e91666f19e7c08c5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "06f80f90c14a83bbd6dbb78bc9e0c05f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "558b3a9567c289fbb6da430c1ba2cfca",
"icons/Icon-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"icons/Icon-maskable-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-maskable-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"index.html": "11150da7b931deb65113a6e084428ed3",
"/": "11150da7b931deb65113a6e084428ed3",
"main.dart.js": "d801df6d5d5ffb9736df13fb1e02f810",
"manifest.json": "8926c5296aa6e800e7a7bfee57e76316",
"splash/img/dark-1x.png": "824859a3315fd26afc3db4e87d96b2c5",
"splash/img/dark-2x.png": "0ef9def667f6e8da6f5aed03a9131354",
"splash/img/dark-3x.png": "acc243a1022e154b8291ffaa64fb5076",
"splash/img/dark-4x.png": "8d1d61197240ca1126eba246619bcfea",
"splash/img/light-1x.png": "824859a3315fd26afc3db4e87d96b2c5",
"splash/img/light-2x.png": "0ef9def667f6e8da6f5aed03a9131354",
"splash/img/light-3x.png": "acc243a1022e154b8291ffaa64fb5076",
"splash/img/light-4x.png": "8d1d61197240ca1126eba246619bcfea",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
