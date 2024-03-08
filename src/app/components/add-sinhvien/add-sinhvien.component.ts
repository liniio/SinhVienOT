import { Component, OnInit } from '@angular/core';
import { Sinhvien } from 'src/app/models/sinhvien.model';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-add-sinhvien',
  templateUrl: './add-sinhvien.component.html',
  styleUrls: ['./add-sinhvien.component.css'],
})
export class AddSinhvienComponent implements OnInit {
  sinhvien: Sinhvien = {
    maSinhVien: '',
    hoTen: '',
    gioiTinh: '',
    khoa: '',
    diemTin: '',
  };
  submitted = false;
  constructor(private sinhvienService: SinhvienService) {}
  ngOnInit(): void {}
  saveSinhVien(): void {
    const data = {
      maSinhVien: this.sinhvien.maSinhVien,
      hoTen: this.sinhvien.hoTen,
      gioiTinh: this.sinhvien.gioiTinh,
      khoa: this.sinhvien.khoa,
      diemTin: this.sinhvien.diemTin,
    };

    this.sinhvienService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  newSinhVien(): void {
    this.submitted = false;
    this.sinhvien = {
      maSinhVien: '',
      hoTen: '',
      gioiTinh: '',
      khoa: '',
      diemTin: '',
    };
  }
}
