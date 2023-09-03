//Директива для отслеживания пересечения, 
// она принимает el - это тот эл-т, на который вешается директива
export default {
    name: "myIntersection",
    mounted(el, binding) {
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },

}