export default function(){
    this.transition(
        this.fromRoute('index'),
        this.toRoute('contest'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

    this.transition(
        this.hasClass('new-contest'),
        this.toValue(true),
        this.use('fade', { duration: 500 }),
        this.reverse('fade', { duration: 500 })
    );
}
