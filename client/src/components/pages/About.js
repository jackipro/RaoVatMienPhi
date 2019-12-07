import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="ui header">
        Các Thành Viên Trong Đội Ngũ Phát Triển Website
      </h1>
      <div className="box-about">
        <div className="ui card">
          <div className="image">
            <img
              alt="/"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/60001877_1352743168197383_8807294408585117696_n.jpg?_nc_cat=104&_nc_ohc=YrTN3ZmsT-8AQkxBX01VJ3e-iuYlPuTjktGN1nQsZ3xKxjULWFi8jr8vA&_nc_ht=scontent.fsgn5-5.fna&oh=3b4979588b0cce7306c158fbee3256e8&oe=5E7652F4"
            />
          </div>
          <div className="content">
            <div className="header">Lâu Phan</div>
            <div className="meta">
              <span className="date">Tham gia vào năm 2019</span>
            </div>

            <div className="description">
              Đam mê lập trình và thích đi du lịch, khám phá những điều hay ho
              và không ngại khó khăn, mặc dù là dân dev nhưng không thể thiếu âm
              nhạc và tôi thích ca hát và không thể sống thiếu âm nhạc
            </div>
          </div>
          <div className="extra content">
            <a href="!#">
              <i aria-hidden="true" className="user icon"></i>
              Backend Dev
            </a>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img
              alt="/"
              src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/36747160_858322057693375_954246853048664064_n.jpg?_nc_cat=106&_nc_ohc=snCHJcHEvZwAQl7Zf3q0Ago_nPuf2XlqpjhRdlxrAmdvFL73AGHs3GY3w&_nc_ht=scontent.fsgn5-6.fna&oh=4aa866e0658b9d57c3a72179782b6509&oe=5E770021"
            />
          </div>
          <div className="content">
            <div className="header">Nam Thanh</div>
            <div className="meta">
              <span className="date">Tham gia vào năm 2019</span>
            </div>
            <div className="description">
              Để giải quyết những vấn đề phức tạp thì người ta sẽ chọn giải pháp
              đơn giản để giải quyết nó, hãy giải quyết vấn đề một cách đơn giản
              nhất có thể.
            </div>
          </div>
          <div className="extra content">
            <a href="!#">
              <i aria-hidden="true" className="user icon"></i>
              Front-end Dev
            </a>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img
              alt="/"
              src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/11698597_431395060403268_1616171340259307191_n.jpg?_nc_cat=110&_nc_ohc=Aa7qAtZU-2sAQmsVJovtZkShNuhjsfGhF8thdHA8921jRydtHjmo-E8VA&_nc_ht=scontent.fsgn5-3.fna&oh=c957a330c5799de47703e736ff528a3a&oe=5E3F1102"
            />
          </div>
          <div className="content">
            <div className="header">Khánh Đình</div>
            <div className="meta">
              <span className="date">Tham gia vào năm 2019</span>
            </div>
            <div className="description">
              Cuộc sống là những bộn bề khó khăn, hãy đi đến những nơi xa xôi để
              học những cái mới mẻ hơn, tôi thích vi vu đây đó để cảm nhận sự
              thanh bình của cuộc sống
            </div>
          </div>
          <div className="extra content">
            <a href="!#">
              <i aria-hidden="true" className="user icon"></i>
              Backend Dev
            </a>
          </div>
        </div>
      </div>
      <div className="banner-about"></div>
    </div>
  );
};
export default About;
