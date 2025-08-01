## CDN

> CDN(Content Delivery Network)은 전 세계에 분산되어 있는 서버들을 통해  
>  사용자에게 웹 컨텐츠를 빠르고 효율적으로 제공하는 기술이다.
>
> 웹사이트의 이미지, CSS, JavaScript 파일, 동영상 등 정적 컨텐츠를  
> 사용자와 물리적으로 가까운 서버에서 전달하는 방식이다.

### **언제 적용하는 것이 좋을까?**

#### 1. 여러 국가에서 서비스를 제공하는 경우

브라질 사용자가 우리나라에 있는 서버에서 파일들을 가져와서  
화면에 띄우려면 로딩이 오래 걸릴 수 있다.  
그래서 엣지 서버를 브라질에 위치시켜 바로 브라질에서  
제공할 수 있도록 지원할 수 있다.

#### 2. 대량 트래픽이 발생하는 경우

CDN을 적용하면 엣지 서버들로 트래픽이 분산되기 때문에,  
대량 트래픽이 발생해도 비교적 안정적으로 처리가 가능하다.

또한, 하나의 서버에 장애가 생기더라도 다른 엣지 서버들을 통해 처리할 수 있기 때문에  
예기치 못한 장애에 대응하기에도 용이하다.
