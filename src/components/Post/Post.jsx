import './Post.css';

export default function Post() {
  return (
    <div className='post'>
      <img
        className='post-image'
        src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt=''
      />
      <div className='post-info'>
        <div className='post-categories'>
          <span className='post-category'>Music</span>
          <span className='post-category'>Life</span>
        </div>
        <span className='post-title'>Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className='post-date'>1 hour ago</span>
      </div>
      <p className='post-desceiption'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quod laborum officiis corporis dolorum
        veniam, vel, aut accusantium reiciendis cum odio commodi? Atque ea obcaecati molestiae consectetur rem officiis
        nobis.
      </p>
    </div>
  );
}
