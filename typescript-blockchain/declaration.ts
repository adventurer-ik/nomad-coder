/**
 * 타입 스크립트는 내장된 자바스크립트 API를 위한 기본적인 타입 정의는 가지고 있다.
 *
 * 핵심: 타입스크립트가 기본적인 타입 정의는 가지고 있다.
 * 뜻: 엄청 멋진 사람이 시간을 들여서 타입스크립트에게 
 *     localStorage의 구조, argumnet, return value, return type을 설명해준 거임!
 *     document object의 모양과 argumne, return type 같은 모든 것들을 설명해주고,
 *     Math object의 경우에도 같은 작업을 해두었음.
 *     
 * 이것이 바로 타입 정의(type definition)이다.
 * : 타입 정의는 네가 타입스크립트에게 몇몇 자바스크립트 코드의 타입을 설명해 주기 위해 사용하는 것이다.
 * : 타입 정의는 타입스크립트가 몇몇 자바스크립트 코드와 API 타입을 설명할 수 있도록 해준다.
 
 *   우리가 타입 정의를 써야하는 이유는 우리가 타입스크립트를 사용하는 목적과 연결되어 있다.
 *   우리는 타입스크립트와 다양한 것들의 타입에 대해 소통해야한다.
 *   문제점은 대부분의 경우 우리는 다른 패키지나 프레임워크, 그리고 라이브러리를 사용하는데, 
 *   그 패키지나 프레임워크, 라이브러리는 타입스크립트가 아니라 자바스크립트로 만들어져 있다.
 *   그래서 우리가 JS로 만들어진 라이브러리를 TS 프로젝트에 쓰려고 한다면, TS는 그것들의 타입에 대해 알 길이 없다.
 *   물론, JS 소스를 허용하는 하지만, TS의 강력한 타입 보호 기능을 활용할 수가 없다.
 * 
 *   TS는 우리가 JS 코드를 쓸 수 있도록 해주며 우리 대부분 JS 라이브러리나 패키지를 사용한다는 것을 알고는 있다 
 *   그렇지만, 타입 보호가 안된다면 아무도 TS를 쓰지 않을 거임!
 *   
 *    타입스크립트에게 우리가 불러올 JS 함수의 모양을 설명하려면 타입 정의가 필요하다.
 * 
 *    자 이번 시간에 JS 파일과 모듈을 위한 타입 정의를 어떻게 작성하는지 알아보자.
 *    대부분, 우리는 TS로 만들어진 패키지는 사용하지 않는다. 대신 JS로 만들어진 패키지와 라이브러리를 쓴다!
 *    그래서 우린 TS에게 JS 파일의 모양을.. 타입을 설명해줄 필요가 있다!
*/
