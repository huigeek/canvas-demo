## canvas demo

工作时，项目的排期一般压缩的非常紧。很多东西没有时间尝试。

写这个demo，是之前在项目里有需要用动画呈现流星效果，但项目太赶，用图片和css简单实现了。

最近想着实现canvas由远及近看星空的效果。

背景色是黑色，生成一定数量的星星，以一个值控制星星的距离。距离改变时，改变星星在画布中x和y坐标，同时也改变星星的亮度。使用requestAnimationFrame做动画。

实现上面效果后，把白色亮点代表的星星，修改为彩色多种形状的星星。

## 启动

> 安装依赖：`npm i` 或 `yarn`
> 
> 执行`npm run dev` 或 `yarn dev`
