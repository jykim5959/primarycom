	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#5682D1";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="https://www.jejunu.ac.kr/main/";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="30";bookConfig.logoPadding="10";bookConfig.logoTop="0";bookConfig.toolbarColor="#FFFFFF";bookConfig.iconColor="#000000";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#000000";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="20";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Show";bookConfig.enableDownload="Yes";bookConfig.DownloadURL="files/downloads/jeju_univ-book2.pdf";var downloadconfig={pdf:{url:'files/downloads/jeju_univ-book2.pdf'}};;bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="웹으로 연결을 위해 <a href=mailto:author@sample.com><u>author</u></a> 로 연락 주시기 바랍니다.";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#161227";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=18;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.CreatedTime ="221215171632";bookConfig.bookTitle="www.jejunu.ac.kr";bookConfig.bookmarkCR="028fa3995d53557976b7743f37e96cd5e6c0da87";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Korean",btnFirstPage:"첫 페이지",btnNextPage:"다음 페이지",btnLastPage:"마지막 페이지",btnPrePage:"이전 페이지",btnDownload:"다운로드",btnPrint:"인쇄",btnSearch:"검색",btnClearSearch:"정리",frmSearchPrompt:"지우기",btnBookMark:"목차",btnHelp:"도움말",btnHome:"홈",btnFullScreen:"전체화면 활성화",btnDisableFullScreen:"전체화면 비활성화",btnSoundOn:"소리 켜기",btnSoundOff:"소리 끄기",btnShareEmail:"공유",btnSocialShare:"소셜 공유",btnZoomIn:"확대",btnZoomOut:"축소",btnDragToMove:"마우스 드래그로 이동",btnAutoFlip:"자동 플립",btnStopAutoFlip:"자동 플립 정지",btnGoToHome:"홈으로 돌아가기",frmHelpCaption:"도움말",frmHelpTip1:"두 번 클릭으로 확대 또는 축소",frmHelpTip2:"페이지 모서리를 드래그하여 표시",frmPrintCaption:"인쇄",frmPrintBtnCaption:"인쇄",frmPrintPrintAll:"모든 페이지 인쇄",frmPrintPrintCurrentPage:"현재 페이지 인쇄",frmPrintPrintRange:"인쇄 범위",frmPrintExampleCaption:"예: 2,5,8-26",frmPrintPreparePage:"페이지 준비:",frmPrintPrintFailed:"인쇄 실패:",pnlSearchInputInvalid:"(최소요청 길이는 3개 기호입니다)",loginCaption:"로그인",loginInvalidPassword:"암호가 틀립니다!",loginPasswordLabel:"암호:",loginBtnLogin:"로그인",loginBtnCancel:"취소",btnThumb:"썸네일",lblPages:"페이지:",lblPagesFound:"페이지:",lblPageIndex:"페이지",btnAbout:"소개",frnAboutCaption:"소개 및 연락처",btnSinglePage:"단일 페이지",btnDoublePage:"이중 페이지",btnSwicthLanguage:"언어 절환",tipChangeLanguage:"아래에서 언어를 선택하세요...",btnMoreOptionsLeft:"추가 옵션",btnMoreOptionsRight:"추가 옵션",btnFit:"창문 맞춤",smallModeCaption:"전체화면으로 보려면 클릭하세요",btnAddAnnotation:"주석 추가",btnAnnotation:"주석",FlipPageEditor_SaveAndExit:"저장 및 종료",FlipPageEditor_Exit:"끝내기",DrawToolWindow_Redo:"다시 실행",DrawToolWindow_Undo:"실행 취소",DrawToolWindow_Clear:"정리",DrawToolWindow_Brush:"브러시",DrawToolWindow_Width:"너비",DrawToolWindow_Alpha:"알파",DrawToolWindow_Color:"색상",DrawToolWindow_Eraser:"지우개",DrawToolWindow_Rectangular:"사각형",DrawToolWindow_Ellipse:"타원",TStuff_BorderWidth:"테두리 폭",TStuff_BorderAlph:"테두리 알파",TStuff_BorderColor:"테두리 색상",DrawToolWindow_TextNote:"텍스트 노트",AnnotMark:"북마크",lastpagebtnHelp:"마지막 페이지",firstpagebtnHelp:"첫 페이지",homebtnHelp:"홈 페이지로 돌아가기",aboubtnHelp:"소개",screenbtnHelp:"전체화면 모드로 이 응용프로그램을 엽니다",helpbtnHelp:"도움말 표시",searchbtnHelp:"페이지에서 검색",pagesbtnHelp:"이 책자의 축소판을 보십시오",bookmarkbtnHelp:"북마크 열기",AnnotmarkbtnHelp:"목차 열기",printbtnHelp:"책자 인쇄",soundbtnHelp:"소리 켜기 및 끄기",sharebtnHelp:"이메일 보내기: ",socialSharebtnHelp:"소셜 공유",zoominbtnHelp:"확대",downloadbtnHelp:"이 책자를 다운로드",pagemodlebtnHelp:"단일 및 이중 페이지 모드 전환",languagebtnHelp:"언어 절환",annotationbtnHelp:"주석 추가",addbookmarkbtnHelp:"북마크 추가",removebookmarkbtnHelp:"북마크 제거",updatebookmarkbtnHelp:"북마크 업데이트",btnShoppingCart:"쇼핑 카트",Help_ShoppingCartbtn:"쇼핑 카트",Help_btnNextPage:"다음 페이지",Help_btnPrePage:"이전 페이지",Help_btnAutoFlip:"자동 플립",Help_StopAutoFlip:"자동 플립 중지",btnaddbookmark:"추가",btndeletebookmark:"삭제",btnupdatebookmark:"업데이트",frmyourbookmarks:"북마크",frmitems:"항목",DownloadFullPublication:"전체 공개",DownloadCurrentPage:"현재 페이지",DownloadAttachedFiles:"첨부 파일",lblLink:"링크",btnCopy:"복사 버튼",infCopyToClipboard:"해당 브라우저는 클립보드를 지원하지 않습니다.",restorePage:"이전 세션을 복원하겠습니까",tmpl_Backgoundsoundon:"배경음악 켜기",tmpl_Backgoundsoundoff:"배경음악 끄기",tmpl_Flipsoundon:"플립음 켜기",tmpl_Flipsoundoff:"플립음 끄기",Help_PageIndex:"현재 페이지 번호",tmpl_PrintPageRanges:"페이지 범위",tmpl_PrintPreview:"미리보기",btnSelection:"텍스트 선택",loginNameLabel:"이름:",btnGotoPage:"이행",btnSettings:"설정",soundSettingTitle:"소리 설정",closeFlipSound:"플립음 닫기",closeBackgroundSound:"배경음 닫기",frmShareCaption:"공유",frmShareLinkLabel:"링크:",frmShareBtnCopy:"복사",frmShareItemsGroupCaption:"소셜 공유",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"페이지로 이동",btnPageBack:"뒤로",btnPageForward:"앞으로",SelectTextCopy:"텍스트 복사",selectCopyButton:"복사",TStuffCart_TypeCart:"쇼핑 카트",TStuffCart_DetailedQuantity:"수량",TStuffCart_DetailedPrice:"가격",ShappingCart_Close:"닫기",ShappingCart_CheckOut:"점검",ShappingCart_Item:"항목",ShappingCart_Total:"합계",ShappingCart_AddCart:"쇼핑카트에 담기",ShappingCart_InStock:"재고",TStuffCart_DetailedCost:"배송 비용",TStuffCart_DetailedTime:"배송 시간",TStuffCart_DetailedDay:"일",ShappingCart_NotStock:"재고가 충분하지 않습니다",btnCrop:"잘라내기",btnDragButton:"드래그",btnFlipBook:"책 플립",btnSlideMode:"슬라이드 모드",btnSinglePageMode:"단일 페이지 모드",btnVertical:"세로 모드",btnHotizontal:"가로 모드",btnClose:"닫기",btnDoublePage:"이중 페이지",btnBookStatus:"책보기",checkBoxInsert:"현재 페이지를 삽입",lblLast:"마지막 페이지입니다.",lblFirst:"첫 페이지입니다.",lblFullscreen:"전체화면으로 보려면 클릭하세요",lblName:"이름",lblPassword:"암호",lblLogin:"로그인",lblCancel:"취소",lblNoName:"사용자이름은 비워둘 수 없습니다.",lblNoPassword:"암호는 비워둘 수 없습니다.",lblNoCorrectLogin:"올바른 사용자 이름과 암호를 입력하십시오.",btnVideo:"비디오 갤러리",btnSlideShow:"슬라이드 쇼",pnlSearchInputInvalid:"(최소요청 길이는 3개 기호입니다)",btnDragToMove:"마우스 드래그로 이동",btnPositionToMove:"마우스 위치로 이동",lblHelp1:"페이지 모서리를 드래그하여 표시",lblHelp2:"더블 클릭으로 확대 및 축소",lblCopy:"복사",lblAddToPage:"페이지에 추가",lblPage:"페이지",lblTitle:"표제",lblEdit:"편집",lblDelete:"삭제",lblRemoveAll:"모두 제거",tltCursor:"커서",tltAddHighlight:"강조표시 추가",tltAddTexts:"텍스트 추가",tltAddShapes:"도형 추가",tltAddNotes:"메모 추가",tltAddImageFile:"이미지 파일 추가",tltAddSignature:"서명 추가",tltAddLine:"라인 추가",tltAddArrow:"화살표 추가",tltAddRect:"직사각형 추가",tltAddEllipse:"타원 추가",lblDoubleClickToZoomIn:"확대하려면 두 번 클릭합니다.",frmShareCaption:"공유",frmShareLabel:"공유",frmShareInfo:"이 출판물은 소셜네트워크에 쉽게 공유할 수 있습니다. 아래의 해당 버튼을 클릭하십시오.",frminsertLabel:"사이트에 삽입",frminsertInfo:"아래의 코드를 사용하여 웹 사이트에 이 출판물을 내장합니다.",btnQRCode:"QR 코드를 스캔하려면 클릭하십시오",btnRotateLeft:"왼쪽으로 회전",btnRotateRight:"오른쪽으로 회전",lblSelectMode:"보기 모드를 선택해주세요",frmDownloadPreview:"미리보기",frmDownload:"Download",frmHowToUse:"사용법",lblHelpPage1:"페이지를 넘기기 위해 손가락으로 넘기듯 터치해주세요",lblHelpPage2:"제스처를 사용하거나 더블클릭하여 페이지를 확대하세요",lblHelpPage3:"컨텐츠 테이블을 확인하기위해 클릭하세요, 책을 북마크하고 소셜 네트워크에 공유해보세요",lblHelpPage4:"북마크를 추가하고 검색 기능과 자동 책 넘기기 기능을 사용해보세요",lblHelpPage5:"모든 책 페이지를 미리보기 위한 섬네일을 열어보세요",TTActionQuiz_PlayAgain:"다시 플레이 해 보시겠습니까?",TTActionQuiz_Ration:"당신의 점수는",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"Scan code to read",frmaboutcaption:"Contact",frmaboutDESCRIPTION:"Description",frmaboutAUTHOR:"Author",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",infDeleteNote:"Do you want to delete the note?",proFullScreenWarn:"Current browser does not support full-screen,Please use Chrome for best results",btnBack:"Backs",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Confirm",frmBookMark:"책 마크",btnFullscreen:"전체 화면",btnExitFullscreen:"전체 화면 종료",btnMore:"더",frmPrintall:"모든 페이지를 인쇄하기",frmPrintcurrent:"현재 페이지 인쇄",frmPrintRange:"인쇄 범위",frmPrintexample:"예 : 2,3,5-10",frmPrintbtn:"인쇄",frmaboutcontactinformation:"연락처 정보",frmSearch:"수색",frmToc:"콘텐츠 표",btnTableOfContent:"디렉토리",lblDescription:"표제",frmLinkLabel:"링크",frmQrcodeCaption:"휴대 전화로 볼 수있는 하단의 2 차원 코드를 스캔합니다."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177332169","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.09239349549791695","y":"0.26488021000368217","width":"0.8298615777449267","height":"0.04038532349831926","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"4"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177338945","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.09575325897056848","y":"0.33139721341267864","width":"0.8349012229539041","height":"0.046324341659836794","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"5"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177332688","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.09575325897056848","y":"0.42998491489386975","width":"0.8365811046902298","height":"0.04038532349831926","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"6"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20221517733744","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link4","x":"0.11591183980647762","y":"0.5285726163750609","width":"0.819110334632442","height":"0.034505695518416896","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"7"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177338206","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link5","x":"0.10079290417954577","y":"0.5653945289764696","width":"0.8500201585808359","height":"0.03325850170449821","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"8"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177336110","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link6","x":"0.08231420507996237","y":"0.6544798013992327","width":"0.8735385028893966","height":"0.03325850170449821","rotation":"NaN","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"10"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177334151","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link7","x":"0.08399408681628814","y":"0.6877383031037309","width":"0.8735385028893966","height":"0.030882894439891197","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"11"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177337146","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link8","x":"0.08399408681628814","y":"0.7209968048082291","width":"0.8718586211530709","height":"0.028507287175284182","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"12"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177338478","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link9","x":"0.07727455987098508","y":"0.7851382009526185","width":"0.8785781480983739","height":"0.052263359821354334","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"14"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202215177335850","alpha":"1","overColor":"16777215","downColor":"13434879","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link10","x":"0.07727455987098508","y":"0.8528430079939184","width":"0.8785781480983739","height":"0.04988775255674732","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"15"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}