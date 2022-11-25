
// 7일 뒤에 만료되는 쿠키 생성
$.cookie('name', 'value', { expires: 7 });


// 키로 사용한 이름으로 값을 읽습니다.
// 키로 저장된 값이 없으면 undefined 가 반환됩니다.
$.cookie('name'); // => "value"
$.cookie('nothing'); // => undefined

// 모든 쿠키 읽기
// 모든 쿠키를 { "name": "value" } 형태의 객체로 반환합니다.
$.cookie(); // => { "name": "value" }
// 성공적으로 삭제되면 true 를 반환하고, 삭제 못했을때는 false를 반환합니다.
$.removeCookie('name'); // => true
$.removeCookie('nothing'); // => false

// 쿠키 삭제시 생성할때 와 같은 path와 domain 을 사용해야 합니다.
// 아래와 같이 생성했다면,
$.cookie('name', 'value', { path: '/' });
// 이렇게 삭제해야 합니다.
$.removeCookie('name', { path: '/' }); // => true