import { Component, OnInit } from '@angular/core';
import { Sinhvien } from 'src/app/models/sinhvien.model';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-sinhvien-list',
  templateUrl: './sinhvien-list.component.html',
  styleUrls: ['./sinhvien-list.component.css'],
})
export class SinhvienListComponent implements OnInit {
  sinhvien?: Sinhvien[];
  currentSinhVien: Sinhvien = {};
  currentIndex = -1;
  maSinhVien = '';
  hoTen = '';
  gioiTinh = '';
  khoa = '';
  diemTin = '';
  constructor(private sinhvienService: SinhvienService) {}
  ngOnInit(): void {
    this.retrieveSinhVien();
  }
  retrieveSinhVien(): void {
    this.sinhvienService.getAll().subscribe({
      next: (data) => {
        this.sinhvien = data;
        console.log(data);
        27;
      },
      error: (e) => console.error(e),
    });
  }
  refreshList(): void {
    this.retrieveSinhVien();
    this.currentSinhVien = {};
    this.currentIndex = -1;
  }
  setActiveSinhVien(sinhvien: Sinhvien, index: number): void {
    this.currentSinhVien = sinhvien;
    this.currentIndex = index;
  }
  removeAllSinhVien(): void {
    this.sinhvienService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
  searchKhoa(): void {
    this.currentSinhVien = {};
    this.currentIndex = -1;
    this.sinhvienService.findByKhoa(this.khoa).subscribe({
      next: (data) => {
        this.sinhvien = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
