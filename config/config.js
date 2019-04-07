export default {
	singular: true,
	 plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
	routes: [{
    path: '/',   //网页上访问的路径地址
    component: './hello',  //component是一个字符串，它是相当于page目录的相对路径。
  }],
};
