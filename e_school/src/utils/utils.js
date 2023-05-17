
/**
 * 
 * @param {添加滑动的元素} event 
 * @param {一个滑动对象,包含top(上滑的回调),bottom(下滑的回调),left(左滑的回调),right(右滑的回调),slde属性(滑动的距离,默认30)都是可选参数} slideObj 
 * 
 */
export function advancedSliding(event,slideObj) {
  
    //起始位置
    let start = {
        X: 0,
        Y: 0
    }
    //结束位置
    let end = {
        X: 0,
        Y: 0
    }
    //滑动方向与滑动距离
    let end_start={
        X:0,
        Y:0,
        slidingDistance:0,
    }

    //预计滑动多少距离，触发事件
    let slidingDistance = slideObj.slde?slideObj.slde:30

    event.current.addEventListener('touchstart', function (e) {
        //起始坐标
        start.X = e.touches[0].clientX
        start.Y = e.touches[0].clientY
    });
    event.current.addEventListener('touchend', function (e) {
        //起始坐标
        end.X = e.changedTouches[0].clientX
        end.Y = e.changedTouches[0].clientY

        //滑动方向
        end_start.X=end.X-start.X
        end_start.Y=end.Y-start.Y
        //实际滑动距离
        end_start.slidingDistance=Math.sqrt((Math.pow(end_start.X,2))+(Math.pow(end_start.Y,2)))
        //如果实际滑动距离 >= 预计滑动距离，就触发滑动事件
        if(end_start.slidingDistance>=slidingDistance){
            if(end_start.X>0){
                if(Math.abs(end_start.Y)<=end_start.X){
                 
                    slideObj.right&&slideObj.right();
                }
            }

            if(end_start.X<0){
                if(Math.abs(end_start.Y)<=Math.abs(end_start.X)){
                  
                    slideObj.left&&slideObj.left();
                }
            }

            if(end_start.Y>0){   
                if(Math.abs(end_start.X)<end_start.Y){
                    
                    slideObj.bottom&&slideObj.bottom();
                }
            }

            if(end_start.Y<0){
                if(Math.abs(end_start.X)<Math.abs(end_start.Y)){
                 
                    slideObj.top&&slideObj.top();
                }
            }
        }

      });

}