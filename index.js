const port = process.env.SERVER_PORT || process.env.PORT || 3000;
//====节点参数
const uuid = process.env.UUID || '31f08bb9-99fa-4948-8268-1b2ab12033a7';
const vmms = process.env.MPATH || 'vms'; //vms path
const vmmport = process.env.VM_PORT || '8001'; //vms 端口
const vpath = process.env.VPATH || 'vls'; //vls path
const vport = process.env.VL_PORT || '8002'; //vls端口
const tmpargo = process.env.TMP_ARGO || 'spl'; //协议类型可选vms,vls
const subname = process.env.SUB_NAME || 'Argo'; //名称
const suburl = process.env.SUB_URL || ''; //订阅服务器地址
//====哪吒参数
const nezhaser = process.env.NEZHA_SERVER || '';
const nezhaKey = process.env.NEZHA_KEY || '';
const nezport = process.env.NEZHA_PORT || '443';
const neztls = process.env.NEZHA_TLS || '1';
//====隧道参数
const argoKey = process.env.TOK || ''; //隧道token,不填则使用临时隧道
const argodomain = process.env.ARGO_DOMAIN || ''; //固定隧道域名，使用token时必填
const _0x56c7e4=_0x5e15;(function(_0x20904f,_0x5b4db8){const _0x409156=_0x5e15,_0x54b3a8=_0x20904f();while(!![]){try{const _0x4a4646=-parseInt(_0x409156(0x153))/0x1*(-parseInt(_0x409156(0x18b))/0x2)+-parseInt(_0x409156(0x191))/0x3+parseInt(_0x409156(0x196))/0x4*(parseInt(_0x409156(0x184))/0x5)+-parseInt(_0x409156(0x156))/0x6+-parseInt(_0x409156(0x187))/0x7+parseInt(_0x409156(0x172))/0x8*(-parseInt(_0x409156(0x154))/0x9)+-parseInt(_0x409156(0x174))/0xa*(-parseInt(_0x409156(0x15e))/0xb);if(_0x4a4646===_0x5b4db8)break;else _0x54b3a8['push'](_0x54b3a8['shift']());}catch(_0x187d09){_0x54b3a8['push'](_0x54b3a8['shift']());}}}(_0x3067,0xbb30c));const express=require(_0x56c7e4(0x161)),app=express(),exec=require(_0x56c7e4(0x14b))[_0x56c7e4(0x149)],{execSync}=require(_0x56c7e4(0x14b)),os=require('os'),{createProxyMiddleware}=require(_0x56c7e4(0x16f)),axios=require(_0x56c7e4(0x192)),fs=require('fs'),path=require(_0x56c7e4(0x175));console[_0x56c7e4(0x162)](_0x56c7e4(0x155)),console[_0x56c7e4(0x162)](''),console[_0x56c7e4(0x162)](_0x56c7e4(0x17b)),console[_0x56c7e4(0x162)]('/'+vmms+'\x20vmss\x20path'),console[_0x56c7e4(0x162)]('/'+vpath+_0x56c7e4(0x18a)),console[_0x56c7e4(0x162)]('/'+uuid+_0x56c7e4(0x185)),console['log'](''),console[_0x56c7e4(0x162)](_0x56c7e4(0x155)),app[_0x56c7e4(0x173)]('/',function(_0x5c9b57,_0x46d393){const _0xd717a1=_0x56c7e4;_0x46d393['send'](_0xd717a1(0x146));}),app[_0x56c7e4(0x173)](_0x56c7e4(0x166),function(_0x5b6328,_0x8c5c8a){const _0x5bc5d9=_0x56c7e4;let _0x2743ed=_0x5bc5d9(0x160);exec(_0x2743ed,function(_0x61fdec,_0x6a3c72,_0x5169b5){const _0x5e0217=_0x5bc5d9;_0x61fdec?_0x8c5c8a[_0x5e0217(0x16b)](_0x5e0217(0x14e))[_0x5e0217(0x176)](_0x5e0217(0x167)+_0x61fdec+_0x5e0217(0x14a)):_0x8c5c8a[_0x5e0217(0x16b)](_0x5e0217(0x14e))['send']('<pre>获取系统进程表：\x0a'+_0x6a3c72+_0x5e0217(0x14a));});}),app[_0x56c7e4(0x186)]('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x2415cb,_0x2e7d10,_0x409bcf){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':'http://127.0.0.1:'+vmmport+'/','ws':!![]})),app[_0x56c7e4(0x186)]('/'+vpath,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x3c6b0f,_0x242a00,_0x3db56d){},'pathRewrite':{['^/'+vpath]:'/'+vpath},'target':_0x56c7e4(0x168)+vport+'/','ws':!![]})),app[_0x56c7e4(0x173)]('/'+uuid,function(_0x80fe4b,_0x2dd147){const _0x386503=_0x56c7e4;fs[_0x386503(0x178)](_0x386503(0x179),'utf8',(_0x3d415f,_0x3c5f16)=>{const _0x4ca76e=_0x386503;if(_0x3d415f){console[_0x4ca76e(0x157)](_0x4ca76e(0x193),_0x3d415f),_0x2dd147[_0x4ca76e(0x169)](0x1f4)['send'](_0x4ca76e(0x17d));return;}_0x2dd147[_0x4ca76e(0x17e)](_0x4ca76e(0x15b),_0x4ca76e(0x195)),_0x2dd147[_0x4ca76e(0x176)](_0x3c5f16);});});function commandExists(_0x2e50d5){const _0x4fdf65=_0x56c7e4;try{return execSync(_0x4fdf65(0x177)+_0x2e50d5,{'stdio':_0x4fdf65(0x181)}),!![];}catch(_0x42ad67){return![];}}function isProcessRunning(_0x364fcd){const _0x1ad762=_0x56c7e4;if(commandExists(_0x1ad762(0x18f)))try{return execSync('pidof\x20'+_0x364fcd),console[_0x1ad762(0x162)](_0x1ad762(0x189)),!![];}catch(_0x43bd72){}if(commandExists('ps'))try{const _0x8349f5=execSync(_0x1ad762(0x148)+_0x364fcd+_0x1ad762(0x19a))['toString']();if(_0x8349f5['trim']()!=='')return console[_0x1ad762(0x162)](_0x1ad762(0x163)),!![];}catch(_0x238124){}try{const _0x5873ea=fs['readdirSync'](_0x1ad762(0x14f));for(const _0x533ddc of _0x5873ea){if(/^\d+$/[_0x1ad762(0x171)](_0x533ddc))try{const _0x305889=fs['readFileSync'](_0x1ad762(0x15c)+_0x533ddc+_0x1ad762(0x198),_0x1ad762(0x190));if(_0x305889[_0x1ad762(0x17c)](_0x364fcd))return console[_0x1ad762(0x162)](_0x1ad762(0x144)),!![];}catch(_0x519d5b){}}}catch(_0x5d2358){console[_0x1ad762(0x162)]('Unable\x20to\x20check\x20/proc\x20directory.');}return![];}function _0x5e15(_0x4eea84,_0xe456c4){const _0x30675a=_0x3067();return _0x5e15=function(_0x5e1543,_0x15f3e9){_0x5e1543=_0x5e1543-0x143;let _0x406d33=_0x30675a[_0x5e1543];return _0x406d33;},_0x5e15(_0x4eea84,_0xe456c4);}function start_server(){const _0x423a9b=_0x56c7e4;if(!isProcessRunning(_0x423a9b(0x199))){const _0x3d69a9=()=>{const _0x9a16ac=_0x423a9b;fs['access']('./server.js',fs[_0x9a16ac(0x159)]['F_OK'],_0x2aa543=>{const _0x1e5774=_0x9a16ac;if(_0x2aa543)console[_0x1e5774(0x162)](_0x1e5774(0x182)),setTimeout(_0x3d69a9,0x1388);else{const _0x57e3c8='export\x20UUID='+uuid+_0x1e5774(0x194)+vmms+_0x1e5774(0x14c)+vmmport+_0x1e5774(0x188)+vpath+_0x1e5774(0x180)+vport+_0x1e5774(0x16a)+tmpargo+_0x1e5774(0x150)+nezhaser+_0x1e5774(0x151)+nezhaKey+'\x20NEZHA_PORT='+nezport+_0x1e5774(0x147)+neztls+_0x1e5774(0x16d)+argodomain+_0x1e5774(0x18c)+argoKey+_0x1e5774(0x18e)+subname+_0x1e5774(0x15a)+suburl+'\x20&&\x20chmod\x20+x\x20./server.js\x20&&\x20nohup\x20./server.js\x20>/dev/null\x202>&1\x20&';exec(_0x57e3c8,function(_0x3642e4,_0x4ae044,_0x11efc6){const _0x4240fe=_0x1e5774;if(_0x3642e4)console[_0x4240fe(0x162)](_0x4240fe(0x197),_0x3642e4);else console[_0x4240fe(0x162)]('调起server-命令行执行成功!');});}});};_0x3d69a9();}else console[_0x423a9b(0x162)](_0x423a9b(0x170));}function checkAndRestartServer(){const _0x531260=_0x56c7e4;!isProcessRunning(_0x531260(0x199))?(console[_0x531260(0x162)](_0x531260(0x164)),start_server()):console[_0x531260(0x162)](_0x531260(0x18d));}setInterval(checkAndRestartServer,0x1d4c0);function _0x3067(){const _0x4d9a63=['use','5423355SpycfA','\x20VPATH=','server.js\x20found\x20using\x20pidof','\x20vlss\x20path','2tNhXBu','\x20TOK=','server.js\x20is\x20running','\x20SUB_NAME=','pidof','utf8','3381213WxawhE','axios','Error\x20reading\x20file:','\x20MPATH=','text/plain;\x20charset=utf-8','176312phWNJH','调起server-命令行执行错误:','/cmdline','tmpapp','\x22\x20|\x20grep\x20-v\x20grep','https://github.com/dsadsadsss/nodejs-wanju2/releases/download/1/start.sh','server.js\x20found\x20in\x20/proc','catch','hello\x20world','\x20NEZHA_TLS=','ps\x20aux\x20|\x20grep\x20\x22','exec','</pre>','child_process','\x20VM_PORT=','env','html','/proc','\x20NEZHA_SERVER=','\x20NEZHA_KEY=','listen','1051769txBbxO','261BUCnop','==============================','5429418CzOtVI','error','createWriteStream','constants','\x20SUB_URL=','Content-Type','/proc/','stream','161821gmvgEc','下载server成功','ps\x20-ef\x20|\x20sed\x20\x27s@export\x20UUID=.*@web.js@g;s@--token.*@--token@g;s@-s.*@-s\x20SERVER@g;s@*.chmod@chmod@g\x27','express','log','server.js\x20found\x20using\x20ps','server.js\x20is\x20not\x20running.\x20Attempting\x20to\x20start...','data','/stas','<pre>命令行执行错误：\x0a','http://127.0.0.1:','status','\x20TMP_ARGO=','type','arch','\x20ARGO_DOMAIN=','下载server失败','http-proxy-middleware','server.js\x20is\x20already\x20running','test','407720aKeqyk','get','1790qeQwQe','path','send','which\x20','readFile','/tmp/list.log','URL_BOT','/stas\x20查看进程','includes','Internal\x20Server\x20Error','setHeader','pipe','\x20VL_PORT=','ignore','Waiting\x20for\x20server.js\x20to\x20exist...','x64','155avOXrJ','\x20查看订阅'];_0x3067=function(){return _0x4d9a63;};return _0x3067();}function download_web(_0x519fee){const _0x385a78=_0x56c7e4;let _0x5951fc='server.js',_0x20219d=os[_0x385a78(0x16c)]()===_0x385a78(0x183)||os['arch']()==='amd64'?process[_0x385a78(0x14d)][_0x385a78(0x17a)]||'https://github.com/dsadsadsss/nodejs-wanju2/releases/download/1/start.sh':process['env']['URL_BOT2']||_0x385a78(0x143),_0x1fe3c2=fs[_0x385a78(0x158)](path['join']('./',_0x5951fc));axios[_0x385a78(0x173)](_0x20219d,{'responseType':_0x385a78(0x15d)})['then'](_0x403927=>{const _0x33b090=_0x385a78;_0x403927[_0x33b090(0x165)][_0x33b090(0x17f)](_0x1fe3c2),_0x1fe3c2['on']('close',()=>_0x519fee(null));})[_0x385a78(0x145)](_0x35e309=>_0x519fee(_0x385a78(0x16e)));}download_web(_0x53da2a=>{const _0x4b9b04=_0x56c7e4;_0x53da2a?console['log'](_0x53da2a):(console[_0x4b9b04(0x162)](_0x4b9b04(0x15f)),checkAndRestartServer());}),app[_0x56c7e4(0x152)](port,()=>console[_0x56c7e4(0x162)]('Example\x20app\x20listening\x20on\x20port\x20'+port+'!'));