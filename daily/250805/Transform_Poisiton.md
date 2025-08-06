# 동적요소의 Transform 과 Position

## Transform

    주변 요소에 영향을 받지 않고 위치를 변경한다.
    reflow와 repaint를 유발하지 않음.

## Position

    주변 요소에 영향을 받으며 위치를 변경한다.
    reflow와 repaint를 유발한다.

요소를 동적으로 변경할 때는 reflow와 repaint를 유발하지 않아 성능적으로  
이점이 있는 transform을 사용하는 것이 좋다.
