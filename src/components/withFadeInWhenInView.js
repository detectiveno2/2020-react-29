import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const withFadeInWhenInView = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHover: false
      };

      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
      this.setState({
        isHover: true
      });
    }

    onMouseLeave() {
      this.setState({
        isHover: false
      });
    }

    render() {
      const { isHover } = this.state;

      return (
        <div
          style={{
            opacity: isHover ? 0.5 : 1
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
  // Viết code ở đây sao cho khi người dùng cuộn chuột trên trang,
  // và WrappedComponent đi từ ngoài vào trong cửa sổ trình duyệt
  // thì nó sẽ hiện ra từ từ với animation speed là 2s (hiệu ứng fadein)
};

export default withFadeInWhenInView;
